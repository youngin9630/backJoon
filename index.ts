import * as fs from "fs";

const [n, input]: string[] = fs
  .readFileSync("example.txt", "utf-8")
  .trim()
  .split("\n");

const inputArr = input.trim().split(" ");

console.log("n: ", n);
console.log("input: ", input);
console.log("inputType:", typeof input);
console.log("inputArr: ", inputArr);
