import * as fs from "fs";

const INPUT_FILE: string =
  process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = fs.readFileSync(INPUT_FILE, "utf-8").trim().split("\n");

const inputWithoutCR = input.map((str) => str.replace(/\r$/, ""));

let entityMessage: {
  id: number;
  name: string;
  message: string[];
}[] = [];

let fakeEntityMessage: {
  id: number;
  name: string;
  message: string[];
} = {
  id: -1,
  name: "",
  message: [],
};
let index: number = 0;
let n: number = parseInt(inputWithoutCR[0]);
let id: number = 0;

while (true) {
  if (n.toString() === "0") {
    entityMessage.push(fakeEntityMessage);
    break;
  }

  for (let i = index; i < n + index; i++) {
    let row = inputWithoutCR[i + 1].split(" ");
    let [name, ...message] = row;
    entityMessage.push({
      id,
      name,
      message,
    });
  }

  index = index + n + 1;
  n = parseInt(inputWithoutCR[index]);
  id++;
}

const _printMsg = (nameA: string, nameB: string) => {
  console.log(`${nameA} was nasty about ${nameB}`);
};

const _Answer = () => {
  let flagAsFirstEntity = true;
  let flagAsLastEntity = false;
  let isNoBodyNasty = true;

  for (let idx = 0; idx < entityMessage.length; idx++) {
    const entity = entityMessage[idx];

    if (entity.id === -1) break;

    if (flagAsFirstEntity) {
      console.log(`Group ${entity.id + 1}`);
      flagAsFirstEntity = false;
    }

    for (let i = 0; i < entity.message.length; i++) {
      if (entity.message[i] === "N") {
        const group = entityMessage.filter((eM) => eM.id === entity.id);
        const targetIdx = group.findIndex((eM) => eM.name === entity.name);

        _printMsg(
          group[(group.length + targetIdx - (i + 1)) % group.length].name,
          entity.name
        );
        isNoBodyNasty = false;
      }
    }

    if (entity.id !== entityMessage[idx + 1].id) {
      if (isNoBodyNasty) {
        console.log("Nobody was nasty");
      }

      console.log("");

      flagAsFirstEntity = true;
      flagAsLastEntity = false;
      isNoBodyNasty = true;
    }
  }
};
_Answer();
