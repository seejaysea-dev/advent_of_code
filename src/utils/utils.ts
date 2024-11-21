import * as fs from 'fs';

export function readInputFile(fileLoc: string): string {
  try {
    const file = fs.readFileSync(fileLoc, 'utf-8');

    return file;
  } catch (err) {
    console.error(`Unable to read file for ${fileLoc}`);
    console.dir(err);
  }

  return "";
}
