let numsList = [];

let num = +prompt("Insira um número");
if (numsList.length === 0 && num === -1){
    throw Error("É necessário adicionar pelomenos um número na lista")
} 
else if (num === "" || num === "null"){
    throw  Error("Insira um número válido")
} 
else {
    numsList.push(num)
    while (num !== -1){
        num = +prompt("Insira um número");
        if(num===""|| num===null){
            break
        } else if (num !== -1){
            numsList.push(num)
            console.log(`número ${num} adicionado a lista`)
        }
    }
    console.log(numsList)
    let lessFrequent = getLessFrequent(numsList);
    alert(`${numsList} => O número menos frequente é ${lessFrequent}`)
}

function getLessFrequent(list){
    let frequency = [];
    list.forEach((element) => {
        if (frequency[element]) {   //verifica se a chave(número) já está na array de freq.
            frequency[element] += 1; //se tiver, adiciona um valor a chave
        } else {
            frequency[element] = 1;  // se não tiver, adiciona a chave com o valor de um
        }
    });

    let minFrequency = Infinity;
    let leastFrequentNumber;

    for (let i in frequency) {  //i nesse caso é a chave(key) do array
    if (frequency[i] < minFrequency) {  //se o valor da chave for menor que o minFrequency
        minFrequency = frequency[i];  // substitui o valor de minFrquency
        leastFrequentNumber = i; // e coloca a chave na variável leastFrequentNumber pra retornarmos depois
    }
    }
    console.log(frequency)

    return leastFrequentNumber;
}