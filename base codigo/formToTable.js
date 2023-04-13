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