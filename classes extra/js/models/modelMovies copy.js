import { Directors } from "./modelDirectors";

export class Movies {
    title = "";
    yearOfRealease = 0;
    director = "";
    duration = 0;
    actors = [];

    constructor (title, yearOfRealease,director,duration,actors){
        this.title = title;
        this.yearOfRealease = yearOfRealease;
        this.director =  director;
        this.duration = duration;
        this.actors = actors;
    }
}


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

// Add new movie
document.getElementById("formMovie").addEventListener("submit", function(event){
    event.preventDefault()
    let title = document.getElementById("title").value;
    let yearOfRealease = document.getElementById("yearOfRelease").value;
    let director = document.getElementById("selectDirectors").value;
    let duration = document.getElementById("duration").value;
    let actors = document.getElementById("actors").value;
    let movie = new Movies(title,yearOfRealease,director,duration,actors)
    moviesList.push(movie)
    
    attTabela()
})


export function attTabela(){
    let tbody = document.getElementById("tbody");
    let line = "";
    tbody.innerHTML = "";
    moviesList.forEach(movie => {
        line = `<tr><td>${movie.title}</td><td>${movie.director}</td><td>${movie.actors}</td><td>${movie.yearOfRealease}</td><td>${movie.duration}</td></tr>`;
        tbody.innerHTML += line
    });
}

// SEARCH ACTORS BY NAME
document.getElementById("searchByActor").addEventListener("click", function(){
    let actorName = prompt("Enter an actor name");
    let moviesWithActor = moviesList.filter(movie => movie.actors.includes(actorName));
    let movieTitles = moviesWithActor.map(movie => movie.title).join(", ");
  
    if (moviesWithActor.length > 0) {
      alert(`Movies where ${actorName} enters: ${movieTitles}`);
    } else {
      alert(`There are no films where ${actorName} enters.`);
    }
})

attTabela()
