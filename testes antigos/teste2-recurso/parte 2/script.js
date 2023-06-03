// Array com as letras do alfabeto
const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * letras.length); // Gera um índice aleatório
    const randomLetter = letras[randomIndex]; // Obtém a letra correspondente ao índice
    letras.splice(randomIndex, 1); // Remove a letra do array original
    return randomLetter;
}

// Função para injetar a letra na célula clicada
function injectLetter(event) {
  const cell = event.target; // A célula clicada
  const letra = getRandomLetter(); // Remove a primeira letra do array
  if(cell.textContent === ""){
    cell.textContent = letra; // Injeta a letra na célula
  } 
  else{
    throw Error("Célula já preenchida")
  }
}

// Adiciona o evento de clique a todas as células da tabela
const cells = document.getElementsByTagName('td');
for(let element of cells){
    element.style.width = "40px";
    element.style.height = "40px";
}
    


for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', injectLetter);
}
