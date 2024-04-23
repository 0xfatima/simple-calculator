#! /usr/bin/env node

import inquirer from "inquirer";


let cont:boolean=true;

while(cont){
    let answer= await inquirer.prompt([{
        message:"Enter first number: ",
        name:"firstNumber",
        type:"number",
    },
    {
        message:"Enter second number: ",
        name:"secondNumber",
        type:"number",
    },
    {
        message:"Choose an operator to  perform an operation:",
        name:"operator",
        type:"list",
        choices:["Addition","Subtraction", "Multiplication", "Division"],
    },

    ]);

    switch(answer.operator){
        case "Addition":
            console.log(answer.firstNumber+answer.secondNumber);
            break;
        case "Subtraction":
            console.log(answer.firstNumber-answer.secondNumber);
            break;
        case "Multiplication":
            console.log(answer.firstNumber*answer.secondNumber);
            break;
        case "Division":
            console.log(answer.firstNumber/answer.secondNumber);
            break;
    }

    let user= await inquirer.prompt({
        message:"Choose 'y' to continue and 'n' to exit:",
        name:"choice",
        type:"list",
        choices:["Y","N"]
    })

    if(user.choice==="Y"){
        cont=true;
    }else{
        cont=false;
    }
}


