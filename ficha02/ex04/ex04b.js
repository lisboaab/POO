function isPerfect(number){
    divisors = [];
    let i = 1;
    let sum = 0;
    while (i != number-1){
        if (number%i == 0){
            divisors.push(i);
        } 
        i++
    }
    for (div of divisors){
        sum += div;
    }
    if (sum == number){
        console.log(`The number ${number} is perfect`)
    } else{
        console.log(`The number ${number} is not perfect`)
    }
}

isPerfect(28);
isPerfect(0);
isPerfect(1);
