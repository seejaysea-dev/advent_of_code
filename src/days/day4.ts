import * as fs from 'fs';
import * as crypto from 'crypto';

import { ResultData } from '../models/resultData';
import { readInputFile } from '../utils/utils';

function mineForHash(input: string, algo: string = 'md5'): string {
  const hasher = crypto.createHash(algo);

  return hasher.update(input).digest('hex');
}


function part1(input: string, searchingFor: string, startAt: number = 0, stopAt: number = 100_000_000): number {
  let i = startAt;

  while (i < stopAt) {

    const hash = mineForHash(`${input}${i}`);

    const pref = hash.substring(0, searchingFor.length);

    if (pref === searchingFor) {
      return i;
    }

    i += 1;
  }

  return -1;
}

export function processData(inputData: string): ResultData {
  inputData = inputData.replace("\n", "");

  let res: ResultData = { part1: null, part2: null };

  res.part1 = part1(inputData, '00000');
  res.part2 = part1(inputData, '000000', res.part1);

  return res;
}
