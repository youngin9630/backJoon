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
const input = fs.readFileSync(INPUT_FILE, "utf-8").trim().split("\n");
const inputWithoutCR = input.map((str) => str.replace(/\r$/, ""));
let entityMessage = [];
let fakeEntityMessage = {
    id: -1,
    name: "",
    message: [],
};
let index = 0;
let n = parseInt(inputWithoutCR[0]);
let id = 0;
while (true) {
    if (n.toString() === "0") {
        entityMessage.push(fakeEntityMessage);
        break;
    }
    for (let i = index; i < n + index; i++) {
        let row = inputWithoutCR[i + 1].split(" ");
        let [name, ...message] = row;
        entityMessage.push({
            id,
            name,
            message,
        });
    }
    index = index + n + 1;
    n = parseInt(inputWithoutCR[index]);
    id++;
}
const _printMsg = (nameA, nameB) => {
    console.log(`${nameA} was nasty about ${nameB}`);
};
const _Answer = () => {
    let flagAsFirstEntity = true;
    let flagAsLastEntity = false;
    let isNoBodyNasty = true;
    for (let idx = 0; idx < entityMessage.length; idx++) {
        const entity = entityMessage[idx];
        if (entity.id === -1)
            break;
        if (flagAsFirstEntity) {
            console.log(`Group ${entity.id + 1}`);
            flagAsFirstEntity = false;
        }
        for (let i = 0; i < entity.message.length; i++) {
            if (entity.message[i] === "N") {
                const group = entityMessage.filter((eM) => eM.id === entity.id);
                const targetIdx = group.findIndex((eM) => eM.name === entity.name);
                _printMsg(group[(group.length + targetIdx - (i + 1)) % group.length].name, entity.name);
                isNoBodyNasty = false;
            }
        }
        if (entity.id !== entityMessage[idx + 1].id) {
            if (isNoBodyNasty) {
                console.log("Nobody was nasty");
            }
            console.log("");
            flagAsFirstEntity = true;
            flagAsLastEntity = false;
            isNoBodyNasty = true;
        }
    }
};
_Answer();
