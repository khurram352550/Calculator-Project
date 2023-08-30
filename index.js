// import inquirer from "inquirer";
// let answer = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// // console.log(answer)
// console.log(answer.age)
// // console.log("Insha Allah, in " + (60 - answer.age) + " years you will be 60 years old.");
// ........Chalk...(beauifies the print answers with different colors,bold etc)........
// import inquirer from "inquirer";
// import chalk from "chalk";
// let answer = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// // console.log(answer)
// console.log(chalk.bgRed(answer.age))
// // console.log("Insha Allah, in " + (60 - answer.age) + " years you will be 60 years old.");
// ................Calculator..................................................
// import inquirer from "inquirer";
// let answer = await inquirer.prompt([
//     {
//         name: "num1",
//         type: "number",
//         message: "Enter 1st number:"
//     },
//     {
//         name: "num2",
//         type: "number",
//         message: "Enter 2nd number:"
//     },
//     {
//         name: "operation",
//         type: "list",
//         choices: ["+", "-", "x", "/"], //"choices" is by default (built-in) property.
//         message: "Enter the operation:"
//     }
// ]);
// if (answer.operation === "+") {
//     console.log(answer.num1 + answer.num2)
// } else if (answer.operation === "-") {
//     console.log(answer.num1 - answer.num2)
// } else if (answer.operation === "x") {
//     console.log(answer.num1 * answer.num2)
// } else if (answer.operation === "/") {
//     console.log(answer.num1 / answer.num2)
// }
// ..........OR by using "switch-statment".................
// switch (true) {
//     case (answer.operation === "+"):
//         console.log(answer.num1 + answer.num2)
//         break;
//     case (answer.operation === "-"):
//         console.log(answer.num1 - answer.num2)
//         break;
//     case (answer.operation === "x"):
//         console.log(answer.num1 * answer.num2)
//         break;
//     case (answer.operation === "/"):
//         console.log(answer.num1 / answer.num2)
//         break;
//     default:
//         console.log('Please enter the correct values')
//         break;
// }
// ..............................destructuring....................................
// // consider simple example:
// let a={num1:5, num2:6, operation: "addation"}
// console.log(a.num1)  // 5
// console.log(a.num2)  // 6
// console.log(a.operation)  // addation
// // destructuring thee above example:
// let {num1, num2, operation}={num1:5, num2:6, operation: "addation"}  //names on both sides must be same
// console.log(num1)  // 5
// console.log(num2)  // 6
// console.log(operation)  // addation
// ...............Calculator can be destructured as under.....................
import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter 1st number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "x", "/"],
        message: "Enter the operation:"
    }
]);
if (operation === "+") {
    console.log(num1 + num2);
}
else if (operation === "-") {
    console.log(num1 - num2);
}
else if (operation === "x") {
    console.log(num1 * num2);
}
else if (operation === "/") {
    console.log(num1 / num2);
}
