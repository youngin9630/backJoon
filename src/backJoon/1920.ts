import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("\n")
  .map((str) => str.replace(/\r$/, ""));

const n = Number(input[0]);
const m = Number(input[2]);
const nArr = input[1].split(" ").map(Number);
const mArr = input[3].split(" ").map(Number);

class BinarySearch {
  static binarySearch(arr: number[], target: number): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }
}

nArr.sort((a, b) => a - b);

const _answer = () => {
  let result: number[] = [];
  for (const num of mArr) {
    if (BinarySearch.binarySearch(nArr, num)) {
      result.push(1);
    } else {
      result.push(0);
    }
    // console.log(BinarySearch.binarySearch(nArr, num) ? 1 : 0);
  }

  console.log(result.join("\n"));
};

_answer();
