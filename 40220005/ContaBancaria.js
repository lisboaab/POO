export default class ContaBancaria {
  // Propriedades
  #numero = 0;
  #nome = "";
  #saldo = 0;


  // Construtor
  constructor(numero,nome,saldo = 0){
    this.#numero = numero;
    this.#nome = nome;
    this.#saldo = saldo;
  }


  // Get/Set
  get numero(){
    return this.#numero
  }

  get nome(){
    return this.#nome
  }

  get saldo(){
    return this.#saldo
  }

  set nome(novoNome){
    this.#nome = novoNome
  }

  set numero(novoNum){
    this.#numero = novoNum
  }


  // Métodos
  depositar(valor){
    this.#saldo += valor
  }

  levantar(valor){
    if (valor < this.#saldo){
      this.#saldo -= valor;
      alert(`Levantou ${valor}€`)
    } else {
      alert(`Não há saldo suficiente para levantar ${valor}€`)
    }
  }

}
