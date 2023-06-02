
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