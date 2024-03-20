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
    .split(" ")
    .map((str) => {
    return str.replace(/\r$/, "");
});
let countArr = [];
for (let idx = 0; idx <= input[1].length - input[0].length; idx++) {
    const slicedB = input[1].slice(idx, idx + input[0].length);
    let count = 0;
    for (let i = 0; i < slicedB.length; i++) {
        if (input[0][i] !== slicedB[i]) {
            count++;
        }
        else {
            continue;
        }
    }
    countArr.push(count);
}
const _findMinValue = (arr) => {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (minVal > arr[i]) {
            minVal = arr[i];
        }
    }
    return minVal;
};
const _Answer = () => {
    console.log(_findMinValue(countArr));
};
_Answer();
