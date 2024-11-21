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
    const [part1, part2] = day2.processDay(fileLoc);
    console.log(`Part 1: ${part1}`);
    console.log(`Part 2: ${part2}`);
    break;
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}
