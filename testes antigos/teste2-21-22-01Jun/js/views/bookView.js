import {Books} from "../models/bookModel.js"
let books = []

books.push(new Books ("Os dias sem sorte", "romance", ["João Pais"], 233, 105))
books.push(new Books ("Amor limite", "romance", ["Maria Augusta","António Coimbra"], 513, 333))
books.push(new Books ("Raios", "Aventura", ["Carlos Roma"], 232))

// ADICIONA NA TABELA OS LIVROS DO GENERO PEDIDO
document.getElementById("btnF1").addEventListener("click",function(){   
    let genre = prompt("Qual género desejas pesquisar?");
    if (genre === null || genre === ""){
        throw Error("Prompt incompleto")
    } 
    else {
        let table = document.getElementById("tableGenres");
        table.innerHTML = "<th>Title</th><th>Genre</th>";
        books.forEach((b) => {
        if (b.genre.toLowerCase() === genre.toLowerCase()){
            let line = `<td>${b.title}</td><td>${b.genre}</td>`;
            table.innerHTML += line;
            }
        })
    }    
})

// VÊ QUAIS LIVROS JÁ FORAM INICIADOS
document.getElementById("btnF2").addEventListener("click",function(){
    let qtyBooks = 0;
    books.forEach((b) => {
        if (b.currentPage > 0){
            qtyBooks += 1;
        }
    })
    alert(`Já comecaste a ler ${qtyBooks} livros`)
})

// CONTA E SOMA TODAS AS PÁGINAS QUE JÁ FORAM LIDAS
document.getElementById("btnF3").addEventListener("click",function(){
    let qtyPages = 0;
    books.forEach((b) => {
        qtyPages += b.currentPage
    })
    alert(`Já leste ${qtyPages} páginas`)
})

// CONTA QUAIS LIVROS JÁ FORAM LIDOS MAIS DA METADE
document.getElementById("btnF4").addEventListener("click",function(){
    let bookList = [];
    
    books.forEach((b) => {
        let half = b.nPages/2;
        if (b.currentPage > half){
            bookList.push(` ${b.title}`)
        }
    })
    alert(`Já passaste da metade dos livros: ${bookList}`)
})

// ADICIONA AUTOR A LIVRO
document.getElementById("btnF5").addEventListener("click",function(){
    let bookTitle = prompt("A qual livros desejas adicionar um autor?")

    if (bookTitle === null || bookTitle === ""){
        throw Error("Prompt incompleto")
    } 
    else {
        let b = books.filter(book => book.title.toLowerCase() === bookTitle.toLowerCase())
        if (b.length === 0){
            throw Error("O livro inserido não está na lista") 
        }
    }
    
    
    let newAuthor = prompt("Qual autor desejas adicionar?");
    
    if (newAuthor === "" || newAuthor === ""){
        throw Error("Prompt incompleto")
    }
    else {
        books.forEach((b) => {
            if(b.title.toLowerCase() === bookTitle.toLowerCase()){
                if(b.authors.includes(newAuthor)){
                    throw Error("Autor já existe")
                }
                else {
                    b.authors.push(newAuthor);
                    console.log(b.authors)
                }
            }
        })
    }
})

// ATUALIZA TABELA LIVROS
function attTable(){
    let tbody = document.getElementById("tbody");
    let timeInHour = 0;
    tbody.innerHTML = "";
    books.forEach((b) => {
        let notRead = b.nPages - b.currentPage
        let timeLeft = notRead*5
        timeInHour += timeLeft
        let line = `<tr><td>${b.title}</td><td>${notRead}</td><td><button class="btnForward">AVANÇAR</button></td><td>${timeLeft}m</td></tr>`
        tbody.innerHTML += line
    })

    let btns = document.getElementsByClassName("btnForward");
  
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          books[i].currentPage += 1;
          attTable()
        });
    }

    document.getElementById("timeInHours").innerHTML = `Tempo em horas: ${timeInHour/60}h`
}


attTable()