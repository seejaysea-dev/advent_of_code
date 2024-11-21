import { readInputFile } from "./utils/utils";
import { day1 } from "./day1/day1";
import * as day2 from "./day2/day2";
import * as figlet from "figlet";

const day = process.argv[2];
const fileLoc = `./src/inputs/${day}`;
console.log(figlet.textSync(`AOC Day ${day.replace('day', '')}`));

switch (day) {
  case "day1":
    day1(readInputFile(fileLoc));
    break;
  case "day2":
    console.log(`Part 1: ${day2.part1(fileLoc)}`);
    console.log(`Part 2: ${day2.part2(fileLoc)}`);
    break;
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}
