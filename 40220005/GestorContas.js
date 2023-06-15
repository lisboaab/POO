import { default as ContaBancaria } from "./ContaBancaria.js";

export default class GestorContas{
  listaContas = []
  constructor(){
    this.listaContas
  }

  criarConta(numero,nome,valor){
    this.listaContas.forEach(conta => {
    if((conta.numero) === numero){
      alert("Número de conta já existente")
    }
    else {
      let novaConta = new ContaBancaria(numero,nome,valor)
      listaContas.push(novaConta)
      console.log("Conta criada")
    }
  });
}

  realizarDeposito(numeroConta, valor){
  let conta = this.listaContas.find(conta => conta.numero === numeroConta)
  if(conta){
    ContaBancaria.depositar(valor)
  }
  else {
    alert("Conta não existe")
  }
}

  realizarLevantamento(numero,valor){
  let conta = this.listaContas.find(conta => conta.numero === numero)
  if (conta){
    conta.levantar(valor)
  }
  else {
    alert("Conta não existe")
  }
}

  exibirSaldo(numeroConta){
  let conta = this.listaContas.find(conta => conta.numero === numeroConta)
  if(conta){
    alert(`Saldo: ${conta.saldo}`)
  }
  else {
    alert("Conta não existe")
  }
}


  listarContas(){
  console.log("Listado!")
  this.listaContas.forEach((conta) => {
    let tabela = document.getElementById("tabelaContas")
    let line = `<tr><td>${conta.numero}</td><td>${conta.nome}</td><td>${conta.saldo}</td></tr>`
    tabela.innerHTML += line
  })
}
}