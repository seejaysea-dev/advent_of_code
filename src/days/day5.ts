import { ResultData } from "../models/resultData";
import { readInputFile } from "../utils/utils";

function isVowel(input: string, vowels: string[]): boolean {
  return (vowels.map((c) => c.toLowerCase())
    .filter((c) => c === input)
    .length) > 0;
}

function checkConsecutive(input: string, char: string, numRow: number): boolean {
  let idx = input.indexOf(char);
  while (idx > -1) {
    let prev = idx;
    idx = input.indexOf(char, prev + 1);
    if ((prev + 1) === idx) {
      return true;
    }
  }
  return false;
}

function hasForbiddenStrings(input: string, forbidden: string[]): boolean {
  let f = (forbidden.filter((f) => input.indexOf(f) > -1));

  return f.length > 0;
}

function isNiceString(s: string,
  vowels: string[] = ["a", "e", "i", "o", "u"],
  forbiddenStrings: string[] = ["ab", "cd", "pq", "xy"],
  consecutiveReq: number = 2): boolean {
  let chars = new Map<string, number>();
  s.split('').forEach((c) => {
    if (chars.get(c)) {
      chars.set(c, chars.get(c) + 1);
    } else {
      chars.set(c, 1);
    }
  })
  const vowelCount = Array.from(chars.keys()).
    filter((c) => {
      const l = c.toLowerCase();
      return isVowel(l, vowels);
    })
    .reduce((acc, cv) => acc + chars.get(cv), 0);
  const properVowels = vowelCount > 2;
  const forbidden = hasForbiddenStrings(s, forbiddenStrings);
  const consec = Array.from(chars.keys())
    .map((m) => { return { char: m, count: chars.get(m) } })
    .filter((f) => f.count > 1)
    .map((t) => checkConsecutive(s, t.char, consecutiveReq))
    .reduce((acc, cv) => acc || cv, false);
  return properVowels && consec && !forbidden;
}

function part1(input: string[]): number {
  let res = input.map((s) => isNiceString(s));

  return res.filter((v) => v).length;
}

export function test_one(): void {
  const cases = [
    { input: "ugknbfddgicrmopn", expected: true },
    { input: "aaa", expected: true },
    { input: "adkeeee", expected: true },
    { input: "ccc", expected: false },
    { input: "jchzalrnumimnmhp", expected: false },
    { input: "haegwjzuvuyypxyu", expected: false },
    { input: "dvszwmarrgswjxmb", expected: false }
  ]
  let results = cases.map((input) => {
    const nice = isNiceString(input.input);
    return {
      case: input.input,
      pass: (nice === input.expected),
      expected: input.expected,
      actual: nice,
    };
  })
}

export function test_two(): void {
  const cases = [
    { input: "qjhvhtzxzqqjkmpb", expected: true },
    { input: "xxyxx", expected: true },
    { input: "uurcxstgmygtbstg", expected: false },
    { input: "ieodomkazucvgmuy", expected: false },
    { input: "aaaa", expected: false },
    { input: "xyxy", expected: false },
    { input: "xxaxxy", expected: true },
  ]
  let results = cases.map((input) => {
    const nice = part2(input.input);
    return {
      case: input.input,
      pass: (nice === input.expected),
      expected: input.expected,
      actual: nice,
    };
  })
}

function part2(input: string): boolean {
  const rule_one = (chars: string[]): boolean => {
    let checker = chars.map((c) => {
      let found = 0;
      let idx = input.indexOf(c);

      while (idx > -1) {
        found++;
        if (found > 1) {
          return true;
        }
        idx = input.indexOf(c, idx + 2); // skip overlapping
      }
      return false;
    });

    return checker.filter((v) => v).length > 0;
  };
  const rule_two = (chars: string[]): boolean => {
    let checker = chars.map((c) => {
      let idx = input.indexOf(c);
      while (idx > -1) {
        if (input[idx] == input[idx + 2]) {
          return true;
        }
        idx = input.indexOf(c, idx + 1)
      }
      return false;
    });

    return checker.filter((v) => v).length > 0;
  };

  let chars = new Map<string, number>();
  for (let i = 0; i < (input.length - 1); i++) {
    const combo = input[i] + input[i + 1];
    if (!chars.has(combo)) {
      chars.set(combo, 0);
    }
    chars.set(combo, (chars.get(combo) + 1));
  }
  let pOne = rule_one(Array.from(chars.keys()));
  chars = new Map<string, number>();
  input.split('')
    .forEach((c) => {
      if (!chars.has(c)) {
        chars.set(c, 0);
      }
      chars.set(c, (chars.get(c) + 1));
    });
  let pt_input = Array.from(chars.keys())
    .map((c) => { return { char: c, count: chars.get(c) } })
    .filter((v) => v.count > 1)
    .map((c) => c.char);
  let pTwo = rule_two(pt_input);
  return pOne && pTwo;
}

export function processData(inputData: string): ResultData {
  let res: ResultData = { part1: null, part2: null };
  res.part1 = part1(inputData.split('\n'));
  res.part2 = inputData.split('\n').map((line) => part2(line)).filter((v) => v).length;
  return res;
}
