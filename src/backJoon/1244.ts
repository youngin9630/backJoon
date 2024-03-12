import * as fs from "fs";

// if sex = 1 (man)
const handleSexMan = (stateOfSwitch: number[], receiveNumber: number) => {
  stateOfSwitch.forEach((el, idx) => {
    if ((idx + 1) % receiveNumber === 0) {
      stateOfSwitch[idx] = el === 0 ? 1 : 0;
    }
  });
};

// if sex = 2 (woman)
const handleSexWoman = (stateOfSwitch: number[], receiveNumber: number) => {
  let left: number = receiveNumber - 1;
  let right: number = receiveNumber - 1;
  let cnt: number = 0;
  while (stateOfSwitch[left] === stateOfSwitch[right]) {
    if (left < 0 || right >= stateOfSwitch.length) break;
    if (stateOfSwitch[left] === stateOfSwitch[right]) {
      stateOfSwitch[left] = stateOfSwitch[left] === 0 ? 1 : 0;
      if (cnt !== 0) {
        stateOfSwitch[right] = stateOfSwitch[right] === 0 ? 1 : 0;
      }

      cnt++;
      left--;
      right++;
    } else {
      break;
    }
  }
};

const input = fs
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const numOfswitch: number = parseInt(input[0]);
const stateOfSwitch: number[] = input[1].split(" ").map((el) => parseInt(el));
const numOfStudent: number = parseInt(input[2]);
const student: {
  sex: number;
  receiveNumber: number;
}[] = [];

for (let i = 3; i < numOfStudent + 3; i++) {
  student.push({
    sex: parseInt(input[i].split(" ")[0]),
    receiveNumber: parseInt(input[i].split(" ")[1]),
  });
}

student.forEach((el) => {
  if (el.sex === 1) {
    handleSexMan(stateOfSwitch, el.receiveNumber);
  } else if (el.sex === 2) {
    handleSexWoman(stateOfSwitch, el.receiveNumber);
  }
});

let result: string = "";

stateOfSwitch.forEach((el, idx) => {
  result += el;
  if (idx < stateOfSwitch.length - 1) {
    result += " ";
  }

  // Line break after printing up to 20 elements in a single line
  if ((idx + 1) % 20 === 0) {
    result += "\n";
  }
});

console.log(result);
