function showTabuada(num){
    if (!num) {
      num = 1;
    }
    let mensagem = "";
    for (let i = 1; i <= 10; i++) {
      let resultado = i * num;
      mensagem += `${num} x ${i} = ${resultado}\n`;
    }
    alert(mensagem);
}
let num = +prompt("Insira um número para ver a tabuada dele")
showTabuada(num)
