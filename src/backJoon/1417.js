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
const input = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .trim()
    .split("\n")
    .map((str) => {
    return Number(str.replace(/\r$/, ""));
});
const inputExcludeN = input.slice(1);
const _findMaxIndex = (arr) => {
    let max = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
};
let count = 0;
while (true) {
    if (_findMaxIndex(inputExcludeN) === 0) {
        break;
    }
    else {
        let maxIndex = _findMaxIndex(inputExcludeN);
        inputExcludeN[maxIndex]--;
        inputExcludeN[0]++;
        count++;
    }
}
console.log(count);
