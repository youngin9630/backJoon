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
    .map((str) => str.replace(/\r$/, ""));
const n = Number(input[0]);
const m = Number(input[2]);
const nArr = input[1].split(" ").map(Number);
const mArr = input[3].split(" ").map(Number);
class BinarySearch {
    static binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                return true;
            }
            else if (arr[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return false;
    }
}
nArr.sort((a, b) => a - b);
const _answer = () => {
    let result = [];
    for (const num of mArr) {
        if (BinarySearch.binarySearch(nArr, num)) {
            result.push(1);
        }
        else {
            result.push(0);
        }
        // console.log(BinarySearch.binarySearch(nArr, num) ? 1 : 0);
    }
    console.log(result.join("\n"));
};
_answer();
