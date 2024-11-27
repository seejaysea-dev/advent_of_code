import { ResultData } from "../models/resultData";

interface Instruction {
  instruction: string,
  start: {
    x: number,
    y: number,
  },
  stop: {
    x: number,
    y: number,
  },
}

let toggle = (cv: boolean): boolean => !cv;
let setState = (on: boolean): boolean => on;

let extractInstruction = (inst: string) => {
  let res: Instruction = {
    instruction: "",
    start: { x: 0, y: 0 },
    stop: { x: 0, y: 0 },
  };

  const cmd_re = /(?<instruction>t.*) (?<startIdx>\d+,\d+) through (?<stopIdx>\d+,\d+)/;

  const matches = inst.match(cmd_re);

  if (matches) {
    // console.debug(matches);
    const extractCoord = (s: string, delim: string) => s.split(delim).map((c) => parseInt(c));

    let startIdx = extractCoord(matches.groups.startIdx, ',');
    let stopIdx = extractCoord(matches.groups.stopIdx, ',');

    res = {
      instruction: matches.groups.instruction,
      start: { x: startIdx[0], y: startIdx[1] },
      stop: { x: stopIdx[0], y: stopIdx[1] },
    };
  }


  return res;
};

let initGrid = (w: number, h:number, fillVal: any): any[][] => new Array(w).fill(fillVal).map(() => new Array(h).fill(fillVal));

export function part_two(input: string[], height: number = 1000, width: number = 1000): number[][] {
  let grid: number[][] = initGrid(width, height, 0);

  let i_num = 0;
  input.forEach((inst) => {
    i_num++;

    inst = inst.toLowerCase().replace('\r', '');

    // console.debug(`line ${i_num}: ${inst}`);

    let parsedInst = extractInstruction(inst);

    let { instruction, start, stop } = parsedInst;

    for (let x = start.x; x <= stop.x; x++) {
      for (let y = start.y; y <= stop.y; y++) {
        const brightChg = (instruction.startsWith("toggle") ? 2 : (instruction.endsWith("on") ? 1 : -1));

        const newVal = grid[x][y] + brightChg

        grid[x][y] = newVal > -1 ? newVal : 0;
      }
    }
  });

  return grid;
}

export function part_one(input: string[], height: number = 1000, width: number = 1000): boolean[][] {
  let grid: boolean[][] = initGrid(width, height, false);

  let i_num = 0;
  input.forEach((inst) => {
    i_num++;

    inst = inst.toLowerCase().replace('\r', '');

    // console.debug(`line ${i_num}: ${inst}`);

    let parsedInst = extractInstruction(inst);

    let { instruction, start, stop } = parsedInst;

    for (let x = start.x; x <= stop.x; x++) {
      for (let y = start.y; y <= stop.y; y++) {
        grid[x][y] = instruction.startsWith("toggle") ? toggle(grid[x][y]) : setState(instruction.endsWith("on"));
      }
    }
  });

  return grid;
}

export function processData(input: string): ResultData {

  let pOne = part_one(input.split('\n')).map((row) => row.filter((v) => v).length).reduce((acc, cv) => acc + cv, 0);
  let pTwo = part_two(input.split('\n')).map((row) => row.reduce((acc, cv) => acc + cv, 0)).reduce((acc, cv) => acc + cv, 0);

  return {
    part1: pOne,
    part2: pTwo,
  };
}
