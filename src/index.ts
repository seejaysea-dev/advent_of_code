import { readInputFile } from "./utils/utils";
import { day1 } from "./day1/day1";
import * as figlet from 'figlet';

let day = process.argv[2];

console.log(figlet.textSync("AOC"));

const input = readInputFile(day);

switch (day) {
  case "day1":
    day1(input);
    break;
  case "day2":
    break;
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}
