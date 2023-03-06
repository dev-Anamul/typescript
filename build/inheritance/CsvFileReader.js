"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    // ! filePath is a string
    constructor(filePath) {
        this.filePath = filePath;
        // ! data is an array of arrays of generic type T
        this.data = [];
    }
    // ! read is a function that takes no arguments and returns nothing
    read() {
        this.data = fs_1.default
            .readFileSync(this.filePath, { encoding: "utf-8" })
            .split("\n")
            .map((row) => row.split(","))
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
