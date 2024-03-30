import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string = fs.readFileSync(INPUT_FILE, "utf-8").trim();

let x: number = parseInt(input);

let count: number = 0;

const _answer = () => {
  while (x > 0) {
    if (x % 2 === 1) {
      x--;
      count++;
    }
    x /= 2;
  }

  console.log(count);
};

_answer();
