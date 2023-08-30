import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter 1st number"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd number"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "x", "/"],
        message: "Enter the method"
    }
]);
if (answer.operation === "+") {
    console.log(chalk.bgRed(answer.num1 + answer.num2));
}
else if (answer.operation === "-") {
    console.log(chalk.bgGreen(answer.num1 - answer.num2));
}
else if (answer.operation === "x") {
    console.log(chalk.bgYellow(answer.num1 * answer.num2));
}
else if (answer.operation === "/") {
    console.log(chalk.bgBlue(answer.num1 / answer.num2));
}
// ....................OR using "switch statment"......................
switch (true) {
    case (answer.operation === "+"):
        console.log(answer.num1 + answer.num2);
        break;
    case (answer.operation === "-"):
        console.log(answer.num1 - answer.num2);
        break;
    case (answer.operation === "x"):
        console.log(answer.num1 * answer.num2);
        break;
    case (answer.operation === "/"):
        console.log(answer.num1 / answer.num2);
        break;
    default:
        console.log('Please enter the correct values');
        break;
}
