import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split(" ")
  .map((str) => {
    return str.replace(/\r$/, "");
  });

let countArr: number[] = [];

for (let idx = 0; idx <= input[1].length - input[0].length; idx++) {
  const slicedB = input[1].slice(idx, idx + input[0].length);
  let count: number = 0;
  for (let i = 0; i < slicedB.length; i++) {
    if (input[0][i] !== slicedB[i]) {
      count++;
    } else {
      continue;
    }
  }
  countArr.push(count);
}

const _findMinValue = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let minVal: number = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
  }

  return minVal;
};

const _Answer = () => {
  console.log(_findMinValue(countArr));
};

_Answer();
