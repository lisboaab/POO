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