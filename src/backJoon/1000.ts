import * as fs from "fs";

const input: string[] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .split(" ");
const a: number = parseInt(input[0]);
const b: number = parseInt(input[1]);

console.log(a + b);
