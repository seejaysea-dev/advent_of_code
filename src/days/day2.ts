import * as fs from 'fs';
import { ResultData } from '../models/resultData';

/**
 * Calculate the required wrapping paper using formula:
 * (2*l*w) + (2*w*h) + (2*h*l)
 * @param l - length
 * @param w - width
 * @param h - height
 * @param includeSlack - flag to include extra slack from smallest side
 * @returns result of (2*l*w) + (2*w*h) + (2*h*l)
 */
function calculatePaper(l: number, w: number, h: number, includeSlack: boolean): number {
  const side_one = l * w;
  const side_two = w * h;
  const side_three = l * h;

  let surf = (2 * side_one) + (2 * side_two) + (2 * side_three);

  if (includeSlack) {
    surf += Math.min(side_one, side_two, side_three);
  }

  return surf;
}

/**
 * Day2 Part 1: Calculate the total square feet of wrapping paper required
 * @param fileContent - String of entire file content.
 * @returns The total square feet required to wrap presents given the dimensions
 */
function part1(fileContent: string): number {
  let res = fileContent.split('\n')
    .filter((line) => line !== "") // Remove empty input lines
    .map((line) => {
      let paper = 0;

      try {
        const dimens = line.split('x');

        const l = Number.parseInt(dimens[0]);
        const w = Number.parseInt(dimens[1]);
        const h = Number.parseInt(dimens[2]);

        if (Number.isNaN(l) || Number.isNaN(w) || Number.isNaN(h)) {
          console.error(`Unable to parse line: ${line}`);
        }

        paper = calculatePaper(l, w, h, true);

      } catch (err) {
        console.error(`Unable to parse line: ${line}`);
        console.dir(err);
      }

      return paper;
    })
    .reduce((acc, cv) => acc + cv, 0);

  return res;
}

/**
 * Day2 Part 1: Calculate the total length of ribbon
 * @param fileContent - String of entire file content.
 * @returns The total length of ribbon required.
 */
function part2(fileContent: string): number {
  let res = 0;

  res = fileContent.split('\n') // Split content into lines.
    .filter((line) => line !== "") // Remove empty lines.
    .map((line) => {

      const dimens = line.split('x')
        .map((x) => Number.parseInt(x))
        .sort((a, b) => a - b);

      const ribbon = (2 * dimens[0]) + (2 * dimens[1]);


      const bow = dimens[0] * dimens[1] * dimens[2];

      return ribbon + bow;
    }) // Process each line.
    .reduce((acc, cv) => acc + cv, 0) // Accumulate results.

  return res;
}

export function processData(input: string): ResultData { return { part1: part1(input), part2: part2(input) }; }
