// o math.random da um numer aleatorio entre [0 e 1[. Precisamos multiplicar por causa disso

// gera um numero random entre 0 e 100, e arredonda pra baixo para ser um numero inteiro
let randomNumber = Math.floor(Math.random()*(100 + 1));


// gera um numero random entre 1 e 10
let randomNumber2 = Math.floor(Math.random() * 10) + 1; // o 1 no final e pra somar caso o math.random de um numero 0,2 por exemplo