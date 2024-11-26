import { readInputFile } from "./utils/utils";
import { day1 } from "./day1/day1";
import * as day2 from "./day2/day2";
import * as day3 from "./day3/day3";
import * as day4 from "./day4/day4";
import * as day5 from "./days/day5";
import { ResultData } from "./models/resultData";

const day = process.argv[2];
const fileLoc = `./src/inputs/${day}`;

let results: ResultData = { part1: null, part2: null };
switch (day) {
  case "day1":
    day1(readInputFile(fileLoc));
    break;
  case "day2":
    [results.part1, results.part2] = day2.processDay(fileLoc);
    break;
  case "day3":
    results = day3.process(fileLoc);
    break;
  case "day4":
    results = day4.processData(fileLoc);
    break;
  case "day5":
    day5.test_two();

    results = day5.processData(fileLoc);
    break;
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}

console.log(`Part 1: ${results.part1}`);
console.log(`Part 2: ${results.part2}`);
