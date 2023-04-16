const numbers = [1,2,3,4,5]

function manipulateNumbers(array, operation){
    if (operation === 'square'){
        return numbers.map(num => num ** 2);
    } else if (operation === 'cube'){
        return numbers.map(num => num ** 3);
    } else if (operation === 'sqrt'){
        return numbers.map(num => Math.sqrt(num));
    }
}


const squares = manipulateNumbers(numbers, 'square');
console.log(squares)

const cube = manipulateNumbers(numbers, 'cube');
console.log(cube)

const sqrt = manipulateNumbers(numbers, 'sqrt');
console.log(sqrt)