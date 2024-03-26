"use strict";
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
const fs = __importStar(require("fs"));
const INPUT_FILE = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const numOfDasom = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .trim()
    .toString();
let numOfOneSet = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
for (let i = 0; i < numOfDasom.length; i++) {
    const currentNum = numOfDasom[i];
    if (currentNum === "6" || currentNum === "9") {
        if (numOfOneSet[6] === 0 && numOfOneSet[9] === 0) {
            numOfOneSet = numOfOneSet.map((num) => num + 1);
        }
        if (numOfOneSet[6] !== 0 || numOfOneSet[9] !== 0) {
            if (numOfOneSet[6] !== 0) {
                numOfOneSet[6]--;
            }
            else {
                numOfOneSet[9]--;
            }
        }
    }
    else {
        if (numOfOneSet[parseInt(currentNum)] === 0) {
            numOfOneSet = numOfOneSet.map((num) => num + 1);
        }
        numOfOneSet[parseInt(currentNum)]--;
    }
}
const _findMax = (numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
};
console.log(_findMax(numOfOneSet));
