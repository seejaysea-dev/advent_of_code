import { ResultData } from "../models/resultData";

/**
 * Day 1 Part 1: Get all the floors of a building.
 * @param input - The input from AOC.
 * @returns The total number of floors represented in the given input.
  */
function part_one(input: string): number {
  const up_inst = input.split('').filter(c => c === "(").length;
  const dn_inst = input.split('').filter(c => c === ")").length;

  return up_inst - dn_inst;
}

/**
  * Day 1 Part 2: Return the first position of the basement (-1)
  * @param input - The input from AOC
  * @returns The position (1-indexed) of the first point -1 is hit
  */
function part_two(input: string): number {
  const inArray = input.split('');
  var floor = 0;
  for (var i = 0; i < inArray.length; i++) {
    floor += (inArray[i] === "(") ? 1 : -1;

    if (floor === -1) {
      return i + 1;
    }
  }

  return -1;
}

export function processData(input: string): ResultData { return { part1: part_one(input), part2: part_two(input) }; }
