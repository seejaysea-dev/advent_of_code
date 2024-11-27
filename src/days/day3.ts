import * as fs from 'fs';
import { ResultData } from '../models/resultData';
import { readInputFile } from '../utils/utils';
import { assert } from '../utils/testing';

const traverse = (directions: string[]): string[] => {
  const coords = ['0x0'];

  let currCoord = { x: 0, y: 0 };

  directions.forEach((d) => {
    switch (d) {
      case "^":
        currCoord.y++
        break;
      case "v":
        currCoord.y--
        break;
      case "<":
        currCoord.x--
        break;
      case ">":
        currCoord.x++
        break;
      default:
        // console.error(`Unkown input: ${d}`);
        break;
    }

    const newCoord = { x: currCoord.x, y: currCoord.y };

    coords.push(`${newCoord.x}x${newCoord.y}`);

  });

  return coords
};

/**
 * Part 1 Processing: Find the number of houses that get one present
 * @param input - text input from data file 
 * @returns total number of houses that get at least one present
 **/
function part1(input: string): number {
  return new Set(traverse(input.split(''))).size;
}

/**
 * Part 2 Processing: Find the number of houses that get one present
 * @param input - text input from data file 
 * @returns total number of houses that get at least one present
 **/
function part2(input: string): number {
  // Split instructions into two
  const indInst = input.split('');

  const d1 = indInst.filter((_, idx) => idx % 2 === 0) // All even instructions.
  const d2 = indInst.filter((_, idx) => idx % 2 === 1) // All even instructions.

  let res = new Set(traverse(d1).concat(traverse(d2))).size;

  return res;
}

export function testCases(): void {

  let cases = [
    { input: ">", expected: 2 },
    { input: "^>v<", expected: 4 },
    { input: "v<^>", expected: 4 },
    { input: "^>v<^>v<", expected: 4 },
    { input: "^^>>vv<<", expected: 8 },
  ];

  cases.forEach((test) => {
    let res = part1(test.input);

    console.debug(`input: ${test.input} => res: ${res}`);

    assert(res, test.expected, `Error with input" ${test.input}`);
  })

}

/**
 * Process data for day 3
 * @param inputData - data to process
**/
export function processData(inputData: string): ResultData {
  let res: ResultData = { part1: 0, part2: 0 }

  res.part1 = part1(inputData);
  res.part2 = part2(inputData);

  return res;
}
