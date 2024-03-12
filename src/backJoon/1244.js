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
// if sex = 1 (man)
const handleSexMan = (stateOfSwitch, receiveNumber) => {
    stateOfSwitch.forEach((el, idx) => {
        if ((idx + 1) % receiveNumber === 0) {
            stateOfSwitch[idx] = el === 0 ? 1 : 0;
        }
    });
};
// if sex = 2 (woman)
const handleSexWoman = (stateOfSwitch, receiveNumber) => {
    let left = receiveNumber - 1;
    let right = receiveNumber - 1;
    let cnt = 0;
    while (stateOfSwitch[left] === stateOfSwitch[right]) {
        if (left < 0 || right >= stateOfSwitch.length)
            break;
        if (stateOfSwitch[left] === stateOfSwitch[right]) {
            stateOfSwitch[left] = stateOfSwitch[left] === 0 ? 1 : 0;
            if (cnt !== 0) {
                stateOfSwitch[right] = stateOfSwitch[right] === 0 ? 1 : 0;
            }
            cnt++;
            left--;
            right++;
        }
        else {
            break;
        }
    }
};
const input = fs
    .readFileSync("/dev/stdin", "utf-8")
    .toString()
    .trim()
    .split("\n");
const numOfswitch = parseInt(input[0]);
const stateOfSwitch = input[1].split(" ").map((el) => parseInt(el));
const numOfStudent = parseInt(input[2]);
const student = [];
for (let i = 3; i < numOfStudent + 3; i++) {
    student.push({
        sex: parseInt(input[i].split(" ")[0]),
        receiveNumber: parseInt(input[i].split(" ")[1]),
    });
}
student.forEach((el) => {
    if (el.sex === 1) {
        handleSexMan(stateOfSwitch, el.receiveNumber);
    }
    else if (el.sex === 2) {
        handleSexWoman(stateOfSwitch, el.receiveNumber);
    }
});
let result = "";
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
