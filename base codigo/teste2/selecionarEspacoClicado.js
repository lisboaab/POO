
// Função para injetar a letra na célula clicada
function setLetter(event) {
    const cell = event.target; // Seleciona qual foi a célula clicada
    const letra = getRandomLetter(); // Remove a primeira letra do array
    if(cell.innerHTML === ""){
      cell.innerHTML = letra; // Injeta a letra na célula
    } 
    else{
      throw Error("Célula já preenchida")
    }
}


// Add evento ao clicar na célula da tabela
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', setLetter); // sem o () depois da função
  }