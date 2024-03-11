import * as fs from "fs";

const [n, input]: string[] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .split(" ");
