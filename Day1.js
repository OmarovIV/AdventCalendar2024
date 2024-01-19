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
// Your processing function
function processLines(lines) {
    let sum = 0;
    for (const line of lines) {
        const digits = line.replace(/\D/g, ""); // Remove non-digits
        let concatenatedDigits = "";
        if (digits.length >= 2) {
            const firstDigit = digits.charAt(0);
            const lastDigit = digits.charAt(digits.length - 1);
            concatenatedDigits = firstDigit + lastDigit;
        }
        else if (digits.length === 1) {
            concatenatedDigits = digits + digits;
        }
        const twoDigitNumber = parseInt(concatenatedDigits);
        if (!isNaN(twoDigitNumber)) {
            sum += twoDigitNumber;
        }
    }
    return sum;
}
// Read text from Day1Sample.txt
const filePath = "Day1Sample.txt";
try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const inputLines = fileContent.split("\n");
    // Remove empty lines
    const nonEmptyLines = inputLines.filter((line) => line.trim() !== "");
    // Process the lines and get the sum
    const resultSum = processLines(nonEmptyLines);
    // Print the result
    console.log("Sum of numbers:", resultSum);
}
catch (error) {
    if (error instanceof Error) {
        console.error(`Error reading the file: ${error.message}`);
    }
    else {
        console.error("An unknown error occurred.");
    }
}
