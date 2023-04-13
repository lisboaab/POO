if (movies.some((movie) => movie.title === newMovie.title)) {
    return alert('Movie already exists');
}



// pra validar maisculas e minusculas
if (produtos.some((prod) => prod.nome.toLowerCase() === novoObj.nome.toLowerCase())) {
    return alert('O produto ja existe!');
}