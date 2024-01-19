import * as fs from "fs";

// Your processing function
function processLines(lines: string[]): number {
  let sum: number = 0;

  for (const line of lines) {
    const digits = line.replace(/\D/g, ""); // Remove non-digits
    let concatenatedDigits: string = "";

    if (digits.length >= 2) {
      const firstDigit = digits.charAt(0);
      const lastDigit = digits.charAt(digits.length - 1);
      concatenatedDigits = firstDigit + lastDigit;
    } else if (digits.length === 1) {
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
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const inputLines: string[] = fileContent.split("\n");

  // Remove empty lines
  const nonEmptyLines: string[] = inputLines.filter(
    (line) => line.trim() !== ""
  );

  // Process the lines and get the sum
  const resultSum: number = processLines(nonEmptyLines);

  // Print the result
  console.log("Sum of numbers:", resultSum);
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error reading the file: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}
