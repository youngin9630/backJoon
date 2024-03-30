import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: number[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split(" ")
  .map((str) => Number(str.replace(/\r$/, "")));

const X = input[0];
const Y = input[1];

const currentWinRate = Math.floor((100 * Y) / X);

if (currentWinRate >= 99) {
  console.log(-1);
} else {
  let additionalGames = 0;
  let left = 1;
  let right = 1e9;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const nextWinRate = Math.floor((100 * (Y + mid)) / (X + mid));

    if (nextWinRate > currentWinRate) {
      right = mid - 1;
      additionalGames = mid;
    } else {
      left = mid + 1;
    }
  }

  console.log(additionalGames);
}
