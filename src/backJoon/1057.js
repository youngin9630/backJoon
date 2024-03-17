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
let [, jimin, hansoo] = fs
    .readFileSync(INPUT_FILE, "utf-8")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
const getNextRoundEntryNumber = (value) => value % 2 === 0 ? value / 2 : (value + 1) / 2;
let round;
for (round = 1; Math.abs(jimin - hansoo) !== 1 || Math.min(jimin, hansoo) % 2 !== 1; round += 1) {
    jimin = getNextRoundEntryNumber(jimin);
    hansoo = getNextRoundEntryNumber(hansoo);
}
console.log(round);
