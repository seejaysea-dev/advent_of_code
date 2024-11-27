import { describe, test, expect } from "@jest/globals";
import { part_one, part_two } from '../days/day7';

describe('part_one', () => {
  test.each([
    [
      "123 -> x\n456 -> y\nx AND y -> d\nx OR y -> e\nx LSHIFT 2 -> f\ny RSHIFT 2 -> g\nNOT x -> h\nNOT y -> i",
      { d: 72, e: 507, f: 492, g: 114, h: 65412, i: 65079, x: 123, y: 456 }
    ],
  ])('validate logic', (input: string, expected: object) => {
    let res = part_one(input);

      expect(res).toEqual(expected);
  });
})
