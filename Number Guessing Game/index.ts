#!/usr/bin/env node
import inquirer from "inquirer";

console.log(" - Guess the number between 1 to 100");

// Returns a random integer from 1 to 100:
const winNumber: number = Math.floor(Math.random() * 100) + 1;

for (let i = 1; i > -1; i++) {
  const answer = await inquirer.prompt([
    { message: "Enter Your Guess: ", type: "number", name: "userNumber" },
  ]);
  if (answer.userNumber === winNumber) {
    console.log("Congratulations! You have Guessed write Number");
    console.log(`Total attempts: ${i}`);
    break;
  } else {
    console.log("You Lose");
    answer.userNumber > winNumber
      ? console.log("Try smaller number")
      : console.log("Try bigger number");
  }
}
