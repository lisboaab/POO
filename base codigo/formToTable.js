const addMovie = (event) => {
    event.preventDefault();

        // pega as infos do form
    const titleAdd = document.getElementById("filmTitle").value;
    const genreAdd = document.getElementById("filmGenre").value;
    const yearAdd = document.getElementById("filmYear").value;
    const coverAdd = document.getElementById("filmCover").value;
    const trailerAdd = document.getElementById("filmTrailer").value;
    
    const newMovie = {
        title: titleAdd,
        genre: genreAdd,
        year: yearAdd,
        cover: coverAdd,
        trailer: trailerAdd,
    }

    if (movies.some((movie) => movie.title === newMovie.title)) {
        return alert('Movie already exists');
    }

    movies.push(newMovie);
    addToTable()
    console.log(movies);
    formAdd.reset();
    return true;
};

const formAdd = document.getElementById("formMovies");
// divide a tabela em tableHead e tableBody e adiciona as infos so no tableBody
const tableAdd = document.getElementById("tableBody");

const addToTable = () => {
    // adc as infos que pegou do form e adiciona na tabela
    let line = "";
    for (const movie of movies) {
        line += `<tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onclick="openCover('${movie.cover}')">SEE COVER</button>
                <button onclick="openTrailer('${movie.trailer}')">SEE TRAILER</button>
                <button onclick="removeMovie('${movie.title}')">REMOVE</button>
            </td>
        </tr>`;
      }
      tableAdd.innerHTML = line;
};
addToTable();

// pegar info de um radiobutton (baseado no nome do botao)
const iva = document.querySelector('input[name="iva"]:checked');
const ivaValue = iva.value;

ou 

const form = document.forms.nameOfTheForm;   //elemento: <form name="nameOfTheForm"...>
const rdBtn = form.elements.rdGenre;  // elemento: <input type=radiobutton name="rdGenre"...>
alert(rdBtn.value);


// limpar um form
form.reset();

// limpar select
const select = document.getElementById('produtoCliente');
select.options[0].selected = true //-> seleciona a opcao de indice 0 que normalmente tem valor = ""; "Selecione uma opcao"


//contagem rows tabela
let numInscritos = (tabela.rows.length) - 1;

for(const row of tabelaAdd.rows){
    qtyTotal += Number(row.cells[2].textContent);}



// remover linha se ela ficar menor de 0 quantidade
function recalcularSubtotal() {
    const linhas = document.querySelectorAll('#tableBody tr');
    linhas.forEach(linha => {
        const qtdInput = linha.querySelector('input[type="number"]');
        const qtd = parseInt(qtdInput.value);
        if (qtd === 0) {
            linha.remove();
        } else {
            const pu = parseFloat(linha.querySelector('.pu').textContent);
            const iva = parseFloat(linha.querySelector('.iva').textContent);
            const subtotal = (pu * qtd) + (pu * qtd * iva / 100);
            linha.querySelector('.subtotal').textContent = subtotal.toFixed(2);
        }
    });
  }