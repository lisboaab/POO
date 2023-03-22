function calc(num1, num2, operator){
    if (operator == "/" && num2 == 0){
        alert("Não é possível dividir por 0.")
    }
    else if (operator == "+"){
        result = num1 + num2;
        alert(`O resultado é ${result}`)
    }
    else if (operator == "-"){
        result = num1 - num2;
        alert(`O resultado é ${result}`)
    }
    else if (operator == "*"){
        result = num1 * num2;
        alert(`O resultado é ${result}`)
    }
    else if (operator == "/"){
        result = num1 / num2;
        alert(`O resultado é ${result}`)
    }
    
}

let num1 = +prompt("Insira o primeiro número:");
let num2 = +prompt("Insira o segundo número:");
let operator = prompt("Insira o operador:");

calc(num1, num2, operator)