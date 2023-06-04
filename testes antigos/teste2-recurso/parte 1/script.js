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


function getLessFrequent(list){
    let frequency = [];
    list.forEach((element) => {
        if (frequency[element]) {   //verifica se a chave(número) já está na array de freq.
            frequency[element] += 1; //se tiver, adiciona um valor a chave
        } else {
            frequency[element] = 1;  // se não tiver, adiciona a chave com o valor de um
        }
    });

    let leastFrequentNum = list[0];

    // Encontra o número menos frequente
    for (let num of list) {
      if (frequency[num] < frequency[leastFrequentNum]) {
        leastFrequentNum = num;
      }
    }
    console.log(frequency)
    return leastFrequentNum;

}