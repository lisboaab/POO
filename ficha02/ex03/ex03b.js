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
/* Linha 6: 
verifica se a variável "num" não é um número usando o método Number.isNaN(). Se "num" não for um número, 
a função exibe um alerta de que a "base deve ser um número".

A função pow() parece ser um programa simples que pede ao usuário para inserir um número e a potência 
que ele deseja elevá-lo. Em seguida, o programa verifica se a base (número) é realmente um número e se 
a potência é um número inteiro maior que 1. Se ambos os valores estiverem corretos, a função calcula a 
potência e exibe o resultado. Se um dos valores estiver incorreto, um alerta é exibido em vez do resultado. 
*/
