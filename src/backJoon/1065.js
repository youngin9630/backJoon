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
const input = fs.readFileSync(INPUT_FILE, "utf-8").trim();
const n = parseInt(input);
// 자릿수 대로 배열에 담아서 리턴하는 함수
const _getDigits = (num) => {
    let numArr = [];
    while (num > 0) {
        numArr.push(num % 10);
        num = Math.floor(num / 10);
    }
    return numArr;
};
const _numOfHanSu = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        let flag = true;
        let numArr = [];
        numArr = _getDigits(i);
        for (let j = 0; j < numArr.length - 2; j++) {
            if (numArr.length < 3) {
                break;
            }
            if (numArr[j] - numArr[j + 1] !== numArr[j + 1] - numArr[j + 2]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            result++;
        }
    }
    return result;
};
const _Answer = () => {
    console.log(_numOfHanSu(n));
};
_Answer();
