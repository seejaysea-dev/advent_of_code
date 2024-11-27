import { readInputFile } from "./utils/utils";
import { ResultData } from "./models/resultData";
import * as processors from './days/processors';

const day = process.argv[2];

let funcs: Map<string, (input: string) => ResultData> = new Map<string, (input: string) => ResultData>([
  ["day1", processors.day1],
  ["day2", processors.day2],
  ["day3", processors.day3],
  ["day4", processors.day4],
  ["day5", processors.day5],
  ["day6", processors.day6],
])

let processor = (day: string): void => {
  const fileLoc = `./src/inputs/${day}`;

  if (funcs.has(day)) {
    let func = funcs.get(day);
    let results = func(readInputFile(fileLoc));

    console.log(`Part 1: ${results.part1}`);
    console.log(`Part 2: ${results.part2}`);
  } else {
    console.log(`No processor found for ${day}`)
  }
}

if (day.toLowerCase() === "--all") {
  console.log("Running all days...");

  Array.from(funcs.keys()).forEach((day) => {
    console.log(`Running: ${day}`);
    processor(day);
  });

} else {
   processor(day);
}
