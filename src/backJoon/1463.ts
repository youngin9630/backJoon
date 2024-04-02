import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string = fs.readFileSync(INPUT_FILE, "utf-8").trim();

const N = Number(input);

const DP = new Array(N + 1).fill(0);

const _answer = (N: number): void => {
  for (let i = 2; i <= N; i++) {
    DP[i] = DP[i - 1] + 1;
    if (i % 2 === 0) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    if (i % 3 === 0) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }

  console.log(DP[N]);
};

_answer(N);
