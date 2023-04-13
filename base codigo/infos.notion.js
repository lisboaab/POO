//Random numbers
let maxNum = +prompt("Qual deve ser o maior número a ser gerado?");
let minNum = +prompt("Qual deve ser o menor número a ser gerado?");

let numGerado = Math.floor(Math.random()*(maxNum - minNum + 1));





//Potência
bodyMass = weight / (height)**2; // ** é o símbolo da exponenciação, potência



//Adicionar um número numa lista/array:
let numbers = [];
   for (let i = num1; i <= num2; i++) {
   if (i % 3 === 0) {
        numbers.push(i);
      }
    }



//Validar se um núemero é inteiro ou não
let num = +prompt("A number:");
let power = +prompt("At the power of...");
    if (Number.isNaN(num)) {
        alert('Base must be a number');
    } else if (Number.isNaN(power) || !Number.isInteger(power) || power <= 1) {
        alert('Exponent must be an integer above 1');
    }




//Diferença dos loops “for…of” e “for…in”
/*O **`for...of`**é usado para iterar sobre valores de um objeto iterável, como um array ou uma 
string. Ele itera sobre os valores do objeto, em vez de seus índices ou chaves. O **`for...in`**, 
por outro lado, é usado para iterar sobre as propriedades enumeráveis de um objeto, incluindo 
suas chaves ou índices e seus valores.*/






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






//Método splice():
        //Adicionar elemento:
games.splice(índice/posicao, 0, { name: 'Sonic', year: 1991 });
/*Para adicionar elementos com o **`splice()`**, é preciso passar pelo menos dois argumentos: 
o índice onde a adição deve começar e 0 (zero) para indicar que não queremos remover nenhum 
elemento. A partir do terceiro argumento, podemos passar quantos elementos quisermos para 
adicionar no array. Por exemplo, para adicionar um objeto com o nome 'Sonic' e o ano '1991' 
no array **`games`** usando o método **`splice()`**, poderíamos fazer o seguinte: 
*/



        /*Remover elemento:*/
const toRemoveName = document.getElementById("gameToRemove").value;
const indexToRemove = games.findIndex((game) => game.name === toRemoveName);
  
if (indexToRemove === -1) {
	return alert('Game not found');
}

games.splice(indexToRemove, 1);
/*Ele recebe dois argumentos obrigatórios: o primeiro é o índice do array onde a modificação 
deve ocorrer e o segundo é a quantidade de elementos que devem ser removidos a partir daquele 
índice. No caso do código apresentado, **`games.splice(indexToRemove, 1)`**está removendo 
o elemento do array **`games`**que possui o índice armazenado na variável **`indexToRemove`**e 
mais um elemento a partir daquele índice. Em outras palavras, está removend*/