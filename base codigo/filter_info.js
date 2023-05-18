const btnSearchDirector = document.querySelector(".btnSearchByDirector")

btnSearchDirector.addEventListener("click", function(event){
    event.preventDefault()
    let nameDirector = document.getElementById("txtSearchDirectorMovies").value;
    let moviesFiltered = movies.filter(movie => movie.director === nameDirector);
    console.log(moviesFiltered)

})

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