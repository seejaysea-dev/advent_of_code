import { describe, test, expect } from "@jest/globals";
import * as day6 from '../days/day6';

describe('part_one', () => {
  describe.each([
    [10, 10],
    [5, 5],
    [20, 20],
    [1, 15],
  ])('using %i x %i grid', (w, h) => {
    let countLights = (grid: boolean[][]) => grid.map((row) => { return row.filter((v) => v).length }).reduce((acc, cv) => acc + cv, 0);

    test('grid is properly sized', () => {
        const grid = day6.part_one([], w, h);

        expect(grid.length).toEqual(h);

        grid.map((col) => expect(col.length).toEqual(w));
    });

    test('turning all lights on', () => {
      const instructions: string[] = [`turn on 0,0 through ${w - 1},${h - 1}`];

      const grid = day6.part_one(instructions, w, h);

      const lightsOn = countLights(grid);

      expect(lightsOn).toEqual(w * h);
    });

    test('turning all lights off', () => {
      const instructions: string[] = [`turn off 0,0 through ${w - 1},${h - 1}`];

      const grid = day6.part_one(instructions, w, h);

      const lightsOn = countLights(grid);

      expect(lightsOn).toEqual(0);
    });

    test('turn one row of lights on', () => {
      let instructions: string[] = [`turn on 0,0 through ${w - 1},0`];

      let grid = day6.part_one(instructions, w, h);

      const lightsOn = countLights(grid);

      expect(lightsOn).toEqual(w);
    });
  });
});
