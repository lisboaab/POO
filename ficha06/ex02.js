const movies = [
    {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    cover: 'https://m.media-amazon.com/images/I/519NBNHX5BL.jpg',
    trailer: 'https://www.youtube.com/embed/6hB3S9bIaco',
  },
  {
    title: 'The Godfather',
    genre: 'Drama',
    year: 1972,
    cover: 'https://m.media-amazon.com/images/I/41+HJCUl3EL.jpg',
    trailer: 'https://www.youtube.com/embed/5DO-nDW43Ik',
  },
]


const formAdd = document.getElementById("formMovies");
const tableAdd = document.getElementById("tableBody");


const addToTable = () => {
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


const addMovie = (event) => {
    event.preventDefault();

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

const removeMovie = (title) => {
    const index = movies.findIndex((movie) => movie.title === title);
    movies.splice(index, 1);
    addToTable();
};
  
const openTrailer = (src) => {
    const iframe = dialogTrailer.querySelector('iframe');
    iframe.src = src;
    dialogTrailer.showModal();
};
  
const openCover = (src) => {
    const img = dialogCover.querySelector('img');
    img.src = src;
    dialogCover.showModal();
};

formAdd.addEventListener("submit", addMovie)