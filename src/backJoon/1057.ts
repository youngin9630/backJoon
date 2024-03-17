import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
let [, jimin, hansoo]: number[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getNextRoundEntryNumber = (value: number): number =>
  value % 2 === 0 ? value / 2 : (value + 1) / 2;

let round: number;
for (
  round = 1;
  Math.abs(jimin - hansoo) !== 1 || Math.min(jimin, hansoo) % 2 !== 1;
  round += 1
) {
  jimin = getNextRoundEntryNumber(jimin);
  hansoo = getNextRoundEntryNumber(hansoo);
}

console.log(round);
