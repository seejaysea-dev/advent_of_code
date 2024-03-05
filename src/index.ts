import { readInputFile } from "./utils/utils";
import { day1 } from "./day1/day1";
const figlet = require("figlet");

let day = process.argv[2];


console.log(figlet.textSync(`AOC: ${day}`));

switch (day) {
  case "day1":
    const min_input = readInputFile(`${day}_min`);
    console.log(`Result: ${day1(min_input)}`);
    const input = readInputFile(day);
    console.log(`Result: ${day1(input)}`);
    break;
  case undefined:
    console.log("No input given");
    break;
  default:
    console.log(`Unknown input ${day}`);
    break;
}
