"use strict";
// import * as fs from "fs";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const INPUT_FILE: string =
//   process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input: string[] = fs
//   .readFileSync(INPUT_FILE, "utf-8")
//   .trim()
//   .split("\n")
//   .map((str) => {
//     return str.replace(/\r$/, "");
//   })
//   .slice(1);
// let armyArr: number[][] = [];
// for (let i = 0; i < input.length; i++) {
//   const row: string[] = input[i].split(" ").slice(1);
//   armyArr[i] = row.map((el) => parseInt(el)).sort((a, b) => a - b);
// }
// let tmpJsonArr: {
//   armyNum: number;
//   count: number;
// }[] = [];
// for (let i = 0; i < armyArr.length; i++) {
//   let jsonIdx: number = 0;
//   let firstArmyNumIdx: number = 0;
//   let count: number = 1;
//   for (let j = 0; j < armyArr[i].length; j++) {
//     tmpJsonArr[jsonIdx] = {
//       armyNum: armyArr[i][firstArmyNumIdx],
//       count: count,
//     };
//     if (j + 1 === armyArr[i].length) break;
//     if (armyArr[i][j] !== armyArr[i][j + 1]) {
//       jsonIdx++;
//       firstArmyNumIdx = j + 1;
//       // reset count
//       count = 1;
//     } else {
//       count++;
//     }
//   }
//   const targetArmyNumIdx: number = tmpJsonArr.findIndex(
//     (el) => el.count > armyArr[i].length / 2
//   );
//   if (targetArmyNumIdx !== -1) {
//     console.log(tmpJsonArr[targetArmyNumIdx].armyNum);
//   } else {
//     console.log("SYJKGW");
//   }
// }
const fs = __importStar(require("fs"));
const INPUT_FILE = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .trim()
    .split("\n")
    .map((str) => {
    return str.replace(/\r$/, "");
})
    .slice(1);
for (let i = 0; i < input.length; i++) {
    const row = input[i].split(" ").slice(1);
    let majorityElement = "";
    let count = 0;
    for (let j = 0; j < row.length; j++) {
        if (count === 0) {
            majorityElement = row[j];
            count = 1;
        }
        else if (majorityElement === row[j]) {
            count++;
        }
        else {
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
    }
    else {
        console.log("SYJKGW");
    }
}
