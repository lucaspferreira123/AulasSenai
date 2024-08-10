const readline = require("readline-sync");
let numOne = readline.questionFloat("digite um numero 1: "); 
let numTwo = readline.questionFloat("digite um numero 2: "); 

let operacao = readline.question("digite + para somar - para subtrair * para multiplicar / para dividir: ");


while (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
    operacao = readline.question("Texto Invalido, digite + para somar - para subtrair * para multiplicar / para dividir: ");
}
switch(operacao){
    case "+":
        result = numOne + numTwo;
        break;
    case "-":
    result = numOne - numTwo;
        break;
    case "*":
        result = numOne * numTwo;
        break;
    case "/":
        result = numOne / numTwo;
        break;
    default:
        console.log("operação invalida");
        break;
}
console.log(`resultado: ${result}`);