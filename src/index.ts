import { readInputFile } from "./utils/utils";
import { day1 } from "./day1/day1";
import * as day2 from "./day2/day2";
import * as day3 from "./day3/day3";
import { ResultData } from "./models/resultData";

const day = process.argv[2];
const fileLoc = `./src/inputs/${day}`;

let results: ResultData = { part1: 0, part2: 0 };
switch (day) {
  case "day1":
    day1(readInputFile(fileLoc));
    break;
  case "day2":
    [results.part1, results.part2] = day2.processDay(fileLoc);
    break;
  case "day3":
    results = day3.process(fileLoc);
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}

console.log(`Part 1: ${results.part1}`);
console.log(`Part 2: ${results.part2}`);
