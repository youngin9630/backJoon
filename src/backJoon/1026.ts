import * as fs from "fs";

const [n, a, b]: string[] = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const aInputArr = a.trim().split(" ");
const bInputArr = b.trim().split(" ");

// transform
const transformedN = parseInt(n);
const transformedA: number[] = aInputArr.map((el) => parseInt(el));
const transformedB: number[] = bInputArr.map((el) => parseInt(el));

const _sortArray = (type: "ASC" | "DESC", arr: number[]) => {
  if (type === "ASC") {
    return arr.sort((a, b) => a - b);
  } else if (type === "DESC") {
    return arr.sort((a, b) => b - a);
  } else {
    throw new Error("Invalid type");
  }
};

const sortedA = _sortArray("ASC", transformedA);
const sortedB = _sortArray("DESC", transformedB);

let result: number = 0;

for (let i = 0; i < transformedN; i++) {
  result += sortedA[i] * sortedB[i];
}

console.log(result);
