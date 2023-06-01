import * as Movies from "./modelMovies.js"

export class Directors {
    name = "";
    birthDate = "";
    country = "";

    constructor(name,birthDate,country){
        this.name = name;
        this.birthDate = birthDate;
        this.country = country;
    }
}

let directors = [
    {
        name: "Bia Lisboa",
        birthDate: "2003-06-25",
        country: "Brazil"
    },
    {
        name: "João Costa",
        birthDate: "2023-05-30",
        country: "Portugal"
    },
]

//  LOAD SELECT ON INDEX PAGE
export function loadSelect(){
    let select = document.getElementById("selectDirectors");
    select.innerHTML= '<option value="">Select an existing director</option>';
    let line = "";

    directors.forEach(director => {
        line = `<option value="${director.name}">${director.name}</option>`;
        select.innerHTML += line
    });
}

// ADD NEW DIRECTOR
export function newDirector(evento){
    evento.preventDefault()
    let name = document.getElementById("name").value;
    let birthDate = document.getElementById("birthDate").value;
    let country = document.getElementById("country").value;
    let newDir = new Directors(name,birthDate,country);
    directors.push(newDir);
    loadSelect()
}


// SEARCH MOVIE BY DIRECTOR
document.getElementById("searchByDirector").addEventListener("click", function(){
    let directorName = prompt("Enter a director name");
    let moviesByDirector = Movies.moviesList.filter(movie => movie.director.toLowerCase() === directorName.toLowerCase());
    let movieTitles = moviesByDirector.map(movie => movie.title).join(", ");

    if (moviesByDirector.length > 0) {
        alert(`Movies directed by ${directorName}: ${movieTitles}`);
    } else {
        alert("There are no movies with this director name");
    }
})


// SEARCH DIRECTOR BY COUNTRY NAME
document.getElementById("searchDirectorByCountry").addEventListener("click", function(){
    let countrySearch = prompt("Enter a country");
    let directorsByCountry = directors.filter(dir => dir.country.toLowerCase() === countrySearch.toLowerCase());
    let movieTitles = Movies.moviesList.filter(movie => directorsByCountry.some(dir => dir.name === movie.director)).map(movie => movie.title).join(", ");
    
    if (movieTitles.length > 0) {
        alert(`Movies directed by directors from ${countrySearch}: ${movieTitles}`);
    } else {
        alert(`There are no movies directed by directors from ${countrySearch}`);
    }
    
})


// DIRECTOR WITH MOST FILMS
document.getElementById("searchDirWithMostFilms").addEventListener("click", function (){
    let directorCounts = {};
    
    // Contar o número de filmes para cada diretor
    Movies.moviesList.forEach(movie => {
        if (directorCounts[movie.director]) {
        directorCounts[movie.director]++;
        } else {
        directorCounts[movie.director] = 1;
        }
    });
    
    let maxFilms = 0;
    let directorWithMostFilms = '';
    
    // Encontrar o diretor com o maior número de filmes
    for (let director in directorCounts) {
        if (directorCounts[director] > maxFilms) {
        maxFilms = directorCounts[director];
        directorWithMostFilms = director;
        }
    }

    alert(`The director with most films is ${directorWithMostFilms}`)
})


document.getElementById("directorForm").addEventListener("submit", (evento) => {newDirector(evento)})

loadSelect()