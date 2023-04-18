if (movies.some((movie) => movie.title === newMovie.title)) {
    return alert('Movie already exists');
}


const addGame = (event)=>  {
    event.preventDefault()
    let nameInfo = document.getElementById("inputName").value;
    let yearInfo = document.getElementById("inputYear").value;
    
    const newObj = {
        name: nameInfo,
        year: yearInfo
    }
    
    // E:
    if (games.some((game) => game.name === newObj.name)) {
        return alert('Game already exists');
    }
    
    games.push(newObj);}


// pra validar maisculas e minusculas
if (produtos.some((prod) => prod.nome.toLowerCase() === novoObj.nome.toLowerCase())) {
    return alert('O produto ja existe!');
}


// modern syntax, not abbreviated
let result1= numbers.some(
    function (element) {
        return element %2 == 0;
    }
);
console.log(result1)


// abbreviated syntax

console.log(numbers.some (element => element % 2 == 0))