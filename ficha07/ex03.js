class Movies {
    title = "";
    director = "";
    actors = "";
    year = 0;
    duration = 0;


    constructor(title,director,actors,year,duration){
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.year = year;
        this.duration = duration;
    }

    set title(title){
        this.title = title
    }

    get title(){
        return this.title
    }
    
    set director(dir){
        this.director = dir
    }

    get director(){
        return this.director
    }
    

    set actors(actors){
        this.actors = actors
    }

    get actors(){
        return this.actors
    }

    set year(insertyear){
        if (insertyear < 0 || insertyear > 2030){
            console.log("Ano inserido inválido!")
        }
        else {
            this.year = insertyear
        }
    }

    get year(){
        return this.year
    }

    set duration(duration){
        this.duration = duration
    }

    get duration(){
        return this.duration
    }

    getFilmByActors(actor){

    }
}

class Directors {
    name = "";
    dateofBirth = "";
    country = "";

    constructor(name,dateofBirth,country){
        this.name = name;
        this.dateofBirth = dateofBirth;
        this.country = country
    }

    set name(name){
        this.name = name
    }

    get name(){
        return this.name
    }

    set dateofBirth(dateofBirth){
        this.dateofBirth = dateofBirth
    }

    get dateofBirth(){
        return this.dateofBirth
    }

    set country(country){
        this.country = country
    }
}

const directors = []
let movies = []
const btnCreateMovie = document.querySelector("#btnCreateMovie")
const btnCreateDirector = document.getElementById("btnCreateDirector")


btnCreateMovie.addEventListener("click", function(event){
    event.preventDefault()
    let title = document.getElementById("title").value;
    let yearRelease = document.getElementById("yearRelease").value;
    let director = document.getElementById("directorSelector").value;
    let duration = document.getElementById("duration").value;
    let actors = document.getElementById("actors").value;

   
    let newMovie = new Movies(title,director,actors,yearRelease,duration)
    movies.push(newMovie)
    
    console.log(movies)
    attTableMovies(movies)
})

btnCreateDirector.addEventListener("click", function(event){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let dateBirth = document.getElementById("dateBirth").value;
    let country = document.getElementById("country").value;
   
    let newDirector = new Directors(name,dateBirth,country)
    directors.push(newDirector)

    let selection = document.getElementById("directorSelector");
    selection.innerHTML += `<option value="${name}">${name}</option>`
    
    console.log(directors)
})
const tbody = document.getElementById("tableBody");
function attTableMovies(movies){
    
    let template = ""
    for (const mov of movies){
        template += `<tr>
        <td>${mov.title}</td>
        <td>${mov.director}</td>
        <td>${mov.actors}</td>
        <td>${mov.year}</td>
        <td>${mov.duration}</td>
        </tr>`;
    }
    tbody.innerHTML = template;
}


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