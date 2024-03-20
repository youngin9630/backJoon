import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: number[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("\n")
  .map((str) => {
    return Number(str.replace(/\r$/, ""));
  });
const inputExcludeN = input.slice(1);

const _findMaxIndex = (arr: number[]): number => {
  let max: number = arr[0];
  let index: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
      index = i;
    }
  }

  return index;
};

let count: number = 0;

while (true) {
  if (_findMaxIndex(inputExcludeN) === 0) {
    break;
  } else {
    let maxIndex: number = _findMaxIndex(inputExcludeN);
    inputExcludeN[maxIndex]--;
    inputExcludeN[0]++;
    count++;
  }
}

console.log(count);
