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
    .map((str) => Number(str.replace(/\r$/, "")));
const X = input[0];
const Y = input[1];
const currentWinRate = Math.floor((100 * Y) / X);
if (currentWinRate >= 99) {
    console.log(-1);
}
else {
    let additionalGames = 0;
    let left = 1;
    let right = 1e9;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const nextWinRate = Math.floor((100 * (Y + mid)) / (X + mid));
        if (nextWinRate > currentWinRate) {
            right = mid;
            additionalGames = mid;
        }
        else {
            left = mid + 1;
        }
    }
    console.log(additionalGames);
}
