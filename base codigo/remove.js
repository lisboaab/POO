// HTML:  
// <button onclick="removeMovie('${movie.title}')">REMOVE</button>

const removeMovie = (title) => {
    const index = movies.findIndex((movie) => movie.title === title);
    movies.splice(index, 1);
    // addToTable();
};