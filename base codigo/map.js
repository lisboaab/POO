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
//Função Map → criar arrays com as informações de um array existente:
const concatenateGameNames = (games) => {
    return games
      .map((game) => game.name)  // cria um array com os nomes dos jogos da array games
      .join('')   // une todos os nomes de jogos em uma string sem espaços entre cada nome
      .toLowerCase()  // transforma tudo em minusculas
      .replaceAll(' ', '');  // caso houver um nome de jogo com um espaço no nele, essa linha tira esse espaço
};

/*A função usa o método **`map()`** para criar um novo array apenas com os nomes dos jogos, 
acessados através da propriedade **`name`** de cada objeto. Em seguida, o método **`join()`** 
é utilizado para unir esses nomes em uma única string, sem espaços entre eles. O método 
**`toLowerCase()`** é aplicado para converter todos os caracteres da string resultante em 
minúsculas, e o método **`replaceAll()`** é utilizado para remover todos os espaços em branco 
da string. Por fim, a função retorna a string resultante.*/



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