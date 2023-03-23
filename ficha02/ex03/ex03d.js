function factorial(num) {
    let count = num+1;
    let fact = 1;
    while (count != 1){
        count -= 1;
        fact *= count;
    }
    console.log(fact)
}

factorial(5);
factorial(6);