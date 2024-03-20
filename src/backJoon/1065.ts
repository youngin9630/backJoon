import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = fs.readFileSync(INPUT_FILE, "utf-8").trim();

const n: number = parseInt(input);

// 자릿수 대로 배열에 담아서 리턴하는 함수
const _getDigits = (num: number): number[] => {
  let numArr: number[] = [];
  while (num > 0) {
    numArr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return numArr;
};

const _numOfHanSu = (n: number): number => {
  let result: number = 0;
  for (let i = 1; i <= n; i++) {
    let flag: boolean = true;
    let numArr: number[] = [];
    numArr = _getDigits(i);

    for (let j = 0; j < numArr.length - 2; j++) {
      if (numArr.length < 3) {
        break;
      }

      if (numArr[j] - numArr[j + 1] !== numArr[j + 1] - numArr[j + 2]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result++;
    }
  }

  return result;
};

const _Answer = () => {
  console.log(_numOfHanSu(n));
};

_Answer();
