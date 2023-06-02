// FILTER
const btnSearchDirector = document.querySelector(".btnSearchByDirector")

btnSearchDirector.addEventListener("click", function(event){
    event.preventDefault()
    let nameDirector = document.getElementById("txtSearchDirectorMovies").value;
    let moviesFiltered = movies.filter(movie => movie.director === nameDirector);
    console.log(moviesFiltered)

})

// INCLUDES
const btnSearchByActors = document.querySelector(".btnSearchByActors")
btnSearchByActors.addEventListener("click", function(){
    const actorToSearch = document.getElementById("txtSearchActorMovies").value;
    
    let moviesFiltered = [];
  
    movies.forEach((element) => {
      if (element.actors.includes(actorToSearch)) {
        moviesFiltered.push(element);
      }
    });
    console.log(moviesFiltered);
    moviesFiltered = [];
})


// SOME
let listaUser = []
if (listaUser.some(user => user.username === "admin")){
  console.log("open modal")
}

// FIND
const user = usersList.find((user) => user.username === username && user.password === password);
if (user) {
  sessionStorage.setItem("loggedUser", JSON.stringify(user));
  return true;
} else {
    console.log("login inválido")
    throw Error("Invalid login!");
} 


// FILTER & MAP - SEARCH MOVIE BY DIRECTOR
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


// FILTER, SOME & MAP - SEARCH DIRECTOR BY COUNTRY NAME
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

// FILTER MAP INCLUDES & JOIN - SEARCH ACTORS ARRAY BY NAME
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

// FILTER SOME TOLOWERCASE()
let parc = parceirias.filter((p) => p.cursos.some((c) => c.toLowerCase() === curso.toLowerCase()));