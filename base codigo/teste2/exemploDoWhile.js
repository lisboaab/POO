let numsList = [];
let num;

do {
  num = +prompt("Insira um número");

    if (numsList.length === 0 && num === -1) {
    throw Error("É necessário adicionar pelo menos um número na lista");
    } else if (isNaN(num)) {
    throw Error("Insira um número válido");
    } else if (num !== -1){
    numsList.push(num);
    }
} while (num !== -1);

console.log(numsList);

let lessFrequent = getLessFrequent(numsList);
alert(`${numsList} => O número menos frequente é ${lessFrequent}`);