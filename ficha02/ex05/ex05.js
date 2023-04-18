function checkNumber(randomNumber, numberGuessed){
    if (numberGuessed === randomNumber){
        return 0
    }
    else if (numberGuessed > randomNumber){
        return 1
    }
    else if (numberGuessed < randomNumber){
        return -1
    }
}

function guessingGame(randomNumber, tries){
    atempt = 0;
    while (atempt < tries){
        let numberGuessed = +prompt("Guess a number?");
        if (numberGuessed === randomNumber){
            alert("You got it right!");
            return 0;
        }
        else if (numberGuessed > randomNumber){
            alert("Down!");
        }
        else if (numberGuessed < randomNumber){
            alert("Up!");
        }
        checkNumber(randomNumber, numberGuessed)
        atempt += 1;
    }
    alert("Sorry, you didn't guess the number in "+ tries + " tries. The number was " + randomNumber);
    return -1;
}



let randomNumber = Math.floor(Math.random()*(100 + 1));
let tries = +prompt("What's the max number of tries?")
guessingGame(randomNumber, tries);

/* A expressão Math.random() retorna um número aleatório entre 0 (inclusive) e 1 (exclusive), 
ou seja, um número decimal no intervalo [0, 1) com uma distribuição uniforme.

Para gerar um número aleatório inteiro no intervalo [0, 100], é necessário multiplicar o 
resultado de Math.random() por 101 (100 + 1) e arredondar para baixo usando a função Math.floor().

Assim, a expressão Math.floor(Math.random()*(100 + 1)) retorna um número inteiro aleatório 
entre 0 e 100, ambos inclusos, e o armazena na variável randomNumber usando a palavra-chave let. */