import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const numOfDasom: string = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .toString();

let numOfOneSet: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 0; i < numOfDasom.length; i++) {
  const currentNum: string = numOfDasom[i];

  if (currentNum === "6" || currentNum === "9") {
    if (numOfOneSet[6] === 0 && numOfOneSet[9] === 0) {
      numOfOneSet = numOfOneSet.map((num) => num + 1);
    }

    if (numOfOneSet[6] !== 0 || numOfOneSet[9] !== 0) {
      if (numOfOneSet[6] !== 0) {
        numOfOneSet[6]--;
      } else {
        numOfOneSet[9]--;
      }
    }
  } else {
    if (numOfOneSet[parseInt(currentNum)] === 0) {
      numOfOneSet = numOfOneSet.map((num) => num + 1);
    }
    numOfOneSet[parseInt(currentNum)]--;
  }
}

const _findMax = (numbers: number[]) => {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
};

console.log(_findMax(numOfOneSet));
