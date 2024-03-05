import * as fs from 'fs';

export function readInputFile(filename: string): string {
  const fileLoc = `./src/inputs/${filename}`;

  const file = fs.readFileSync(fileLoc, 'utf-8');

  return file;
}
