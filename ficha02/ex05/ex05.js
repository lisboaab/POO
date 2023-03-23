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