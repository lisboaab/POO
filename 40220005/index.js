import {default as GestorContas} from "./GestorContas.js";
let newGestao = new GestorContas()

// ADD CONTA
let numero = document.getElementById("numeroContaInput").value;
let nome = document.getElementById("nomeTitularInput").value;
let btnCriarConta = document.getElementById("btnCriarConta");
btnCriarConta.addEventListener("click", newGestao.criarConta(nome,numero, 0));


//REALIZAR DEPÓSITO
let numeroConta = document.getElementById("depositoNumeroContaInput").value;
let valor = document.getElementById("valorDepositoInput").value;
document.getElementById("btnRealizarDeposito").addEventListener("click", newGestao.realizarDeposito(numeroConta, valor))

// REALIZAR LEVANTAMENTO
let levantamentoNumeroContaInput = document.getElementById("levantamentoNumeroContaInput").value;
let valorLevantamentoInput = document.getElementById("valorLevantamentoInput").value;
document.getElementById("btnRealizarLevantamento").addEventListener("click", newGestao.realizarLevantamento(levantamentoNumeroContaInput,valorLevantamentoInput))


// EXIBIR SALDO
let saldoNumeroContaInput = document.getElementById("saldoNumeroContaInput").value;
document.getElementById("btnExibirSaldo").addEventListener("click", newGestao.exibirSaldo(saldoNumeroContaInput))


// TABELA
let btnTabela = document.getElementById("btnListarContas");
btnTabela.addEventListener("click", newGestao.listarContas)




