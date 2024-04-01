#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from "chalk-animation";
async function rainbow(arr, time) {
    let text = chalkAnimation.rainbow(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
async function karaoke(arr, time) {
    let text = chalkAnimation.karaoke(arr);
    await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
    text.stop();
}
await rainbow(`Welcome To N.M.J Num Guessing Game`, 4000);
console.log(chalk.bgCyanBright.blue('Welcome to N.M.J Number_Guessing_Game'));
let randomnum = Math.floor(Math.random() * 100 + 1);
while (true) {
    let input = await inquirer.prompt({
        name: "GuessedNumber",
        type: "number",
        message: "Pls guess the number between 1 - 100:"
    });
    // let guessednum = input.GuessedNumber;
    //3)compare user input with computer number
    if (input.GuessedNumber === randomnum) {
        console.log(chalk.green("Congratulation! You got it right!"));
        break;
    }
    else {
        console.log(chalk.redBright('Wrong guess'));
        if (input.GuessedNumber > randomnum) {
            console.log(chalk.bgRed('\nYour number is too high'));
        }
        else {
            console.log(chalk.bgWhiteBright('\nYour number is too low'));
        }
    }
}
console.log('Game over');
