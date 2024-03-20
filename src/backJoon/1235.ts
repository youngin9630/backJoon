import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [n, ...studentNumber]: string[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("\n")
  .map((str) => {
    return str.replace(/\r$/, "");
  });

let count: number = 1;

const _hasDuplicates = (arr: string[]): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};

const _extractLastElement = (arr: string[], index: number): string[] => {
  let result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].slice(index);
  }

  return result;
};

const _answer = () => {
  let lastElementArr: string[] = [];
  let index: number = -1;

  while (studentNumber.length > 0) {
    lastElementArr = _extractLastElement(studentNumber, index--);
    if (!_hasDuplicates(lastElementArr)) {
      break;
    } else {
      count++;
    }
  }

  console.log(count);
};

_answer();
