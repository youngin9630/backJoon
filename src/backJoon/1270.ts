import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("\n")
  .map((str) => {
    return str.replace(/\r$/, "");
  })
  .slice(1);

for (let i = 0; i < input.length; i++) {
  const row: string[] = input[i].split(" ").slice(1);

  let majorityElement = "";
  let count = 0;

  for (let j = 0; j < row.length; j++) {
    if (count === 0) {
      majorityElement = row[j];
      count = 1;
    } else if (majorityElement === row[j]) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;

  for (let j = 0; j < row.length; j++) {
    if (row[j] === majorityElement) {
      count++;
    }
  }

  if (count > row.length / 2) {
    console.log(majorityElement);
  } else {
    console.log("SYJKGW");
  }
}
