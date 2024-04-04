import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input: string[] = fs
  .readFileSync(INPUT_FILE, "utf-8")
  .trim()
  .split("")
  .map((e: string) => e);

const name: string[] = input;

const _isValid = (nameDict: { [key: string]: number }): boolean => {
  let oddCount: number = 0;

  for (let key in nameDict) {
    if (nameDict[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
};

const _answer = (name: string[]): void => {
  name.sort((a, b) => a.localeCompare(b));
  let nameDict: { [key: string]: number } = {};

  for (let i = 0; i < name.length; i++) {
    if (nameDict[name[i]]) {
      nameDict[name[i]]++;
    } else {
      nameDict[name[i]] = 1;
    }
  }

  if (!_isValid(nameDict)) {
    console.log("I'm Sorry Hansoo");
  } else {
    let center: string = "";
    let result: string = "";

    for (let key in nameDict) {
      if (nameDict[key] % 2 !== 0) {
        center = key;
      }

      for (let i = 0; i < Math.floor(nameDict[key] / 2); i++) {
        result += key;
      }
    }

    console.log(result + center + result.split("").reverse().join(""));
  }
};

_answer(name);
