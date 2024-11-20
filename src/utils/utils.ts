import * as fs from 'fs';

export function readInputFile(filename: string): string {
  try {
    const fileLoc = `./src/inputs/${filename}`;

    const file = fs.readFileSync(fileLoc, 'utf-8');

    return file;
  } catch (err) {
    console.error(`Unable to read file for ${filename}`);
    console.dir(err);
  }

  return "";
}
