/*
- Create a new array  from calling a function for every array element
- Does not execute the function for empty elements
- Does not change the original array
Sintax: array.map(function(currentValue, index, arr), thisValue)
*/

// Concatena as infos do objeto
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
    ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

// -------------
// operacoes matematicas

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