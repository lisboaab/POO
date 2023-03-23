function pow() {
    let num = +prompt("A number:");
    let power = +prompt("At the power of...");
    if (Number.isNaN(num)) {
        alert('Base must be a number');
    } else if (Number.isNaN(power) || !Number.isInteger(power) || power <= 1) {
        alert('Exponent must be an integer above 1');
    } else {
        let result = num;
        let i = 1;
        // ou só num ** power
        while (i < power) {
            result *= num;
            i++;
        }
        alert(`The result is ${result}`);
    }
}

pow();
