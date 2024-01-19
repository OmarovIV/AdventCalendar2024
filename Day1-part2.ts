import * as fs from "fs";

// Your processing function
function processLines(lines: string[]): number {
  let sum: number = 0;

  // Dictionary to map word representations to digits
  const wordToDigit: { [key: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const line of lines) {
    // Match both numbers and words using a regular expression
    const matches = line.match(
      /(?:\d+)|(?:one|two|three|four|five|six|seven|eight|nine)/gi
    );

    // Process all matches
    if (matches && matches.length >= 1) {
      const digits: string[] = [];

      for (const match of matches) {
        // If it's a word, replace it with the corresponding digit
        const digit = wordToDigit[match.toLowerCase()] || match;

        digits.push(digit);
      }

      // If there are more than one digit, concatenate them; otherwise, use the single digit
      const concatenatedDigits =
        digits.length > 1 ? digits.join("") : digits[0];

      // Take the first and last digits
      const firstDigit = concatenatedDigits.charAt(0);
      const lastDigit = concatenatedDigits.charAt(
        concatenatedDigits.length - 1
      );

      const twoDigitNumber = parseInt(firstDigit + lastDigit);
      sum += isNaN(twoDigitNumber) ? 0 : twoDigitNumber;
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
