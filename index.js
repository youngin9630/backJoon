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
const [n, ...studentNumber] = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .trim()
    .split("\n")
    .map((str) => {
    return str.replace(/\r$/, "");
});
let count = 1;
const _hasDuplicates = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
};
const _extractLastElement = (arr, index) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].slice(index);
    }
    return result;
};
const _answer = () => {
    let lastElementArr = [];
    let index = -1;
    while (studentNumber.length > 0) {
        lastElementArr = _extractLastElement(studentNumber, index--);
        if (!_hasDuplicates(lastElementArr)) {
            break;
        }
        else {
            count++;
        }
    }
    console.log(count);
};
_answer();
