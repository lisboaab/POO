export let moviesList = [
    { 
    title: "Rei Leão",
    yearOfRealease: 2021,
    director: "Bia Lisboa",
    duration: 200,
    actors: [ "carol", "catarina"]
    },
    { 
    title: "Era do gelo",
    yearOfRealease: 2004,
    director: "João Costa",
    duration: 550,
    actors: [ "manny", "diego fofinho"]
    }
]

export function attTabela(){
    let tbody = document.getElementById("tbody");
    let line = "";
    tbody.innerHTML = "";
    moviesList.forEach(movie => {
        line = `<tr><td>${movie.title}</td><td>${movie.director}</td><td>${movie.actors}</td><td>${movie.yearOfRealease}</td><td>${movie.duration}</td></tr>`;
        tbody.innerHTML += line
    });
}

// tabela com botoes
let btns = document.getElementsByClassName("btnForward");
  
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          books[i].currentPage += 1;
          attTabela()
        });
    }