function isDigit(char: string): boolean {
  return char >= "0" && char <= "9";
}

function getFirst(line: string): number {
  for (let i = 0; i < line.length; ++i) {
    if (isDigit(line[i])) {
      return parseInt(line[i]);
    }
  }

  return 0;
}

function getLast(line: string): number {
  for (let i = (line.length - 1); i >= 0; --i) {
    if (isDigit(line[i])) {
      return parseInt(line[i]);
    }
  }

  return 0;
}

export function day1(input: string): number {
  console.log("Start day1");
  let res = 0;

  const lines = input.split("\n");


  lines.forEach(line => {
    const lineVal = (getFirst(line) * 10) + getLast(line); 
    console.log(lineVal);
    res += lineVal;
  });

  return res;
}
