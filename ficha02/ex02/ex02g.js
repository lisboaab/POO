function multOfThree(num1, num2) {
  // soma todos os numeros multiplos de 3 dentro de um determinado periodo
    let numbers = [];
    for (let i = num1; i <= num2; i++) {
      if (i % 3 === 0) {
        numbers.push(i);
      }
    }
    let soma = numbers.reduce((a, b) => a + b, 0);
    return soma;
  }
  
let result = multOfThree(1, 10);
 console.log(result); // 18
  