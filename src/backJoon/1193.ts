import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";
const X: number = Number(
  fs.readFileSync(INPUT_FILE, "utf-8").toString().trim()
);

let n: number = 1;
while (((n - 1) * n) / 2 >= X || X > (n * (n + 1)) / 2) {
  n += 1;
}

const index: number = X - ((n - 1) * n) / 2;

if (n % 2 === 1) {
  console.log(`${n + 1 - index}/${index}`);
} else {
  console.log(`${index}/${n + 1 - index}`);
}
