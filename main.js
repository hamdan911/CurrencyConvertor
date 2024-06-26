#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let loop = true;
while (loop) {
    console.log(chalk.yellowBright("-".repeat(50)));
    console.log(chalk.yellow.bgGray(`\n Welcome to ${chalk.green.bgGray("MUHAMMAD HAMDAN")} Currency Converter \n`));
    console.log(chalk.yellowBright("-".repeat(50)));
    let exchange_rate = {
        USD: 1,
        EUR: 0.9,
        JPY: 113,
        CAD: 1.3,
        AUD: 1.65,
        PKR: 280, // Pakistani Rupees
    };
    // GET INPUT FROM USER
    let userAnswer = await inquirer.prompt([
        {
            name: "fromCurrency",
            type: "list",
            message: "Select the Currency to Convert from",
            choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
        },
        {
            name: "toCurrency",
            type: "list",
            message: "Select the Currency to Convert into",
            choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the Amount to Convert",
        },
    ]);
    let fromAmount = exchange_rate[userAnswer.fromCurrency];
    let toAmount = exchange_rate[userAnswer.toCurrency];
    let amount = userAnswer.amount;
    // Amount Conversation Formula
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    // Display the  converted Amount
    console.log(chalk.redBright(`\n ${chalk.yellow("======> ")} Converted Amount = ${chalk.greenBright(convertedAmount.toFixed(2))} ${chalk.yellow(" <========")} \n`));
    // User Choice Want to continue conversion
    const conversation = await inquirer.prompt([
        {
            name: "continueLoop",
            type: "confirm",
            message: chalk.blue("Do you want to convert another conversation"),
        },
    ]);
    if (conversation.continueLoop === false) {
        loop = false;
        console.log(chalk.green(`\nThanks for using my Currency Converter\n`));
    }
}
