// HTML:  
// <button onclick="removeMovie('${movie.title}')">REMOVE</button>

const removeMovie = (title) => {
    const index = movies.findIndex((movie) => movie.title === title);
    movies.splice(index, 1);
    // addToTable();
};


/*function parkValidator(matricula, movimento) {
    if (movimento === 'E' || movimento === 'e') {
      if (guestList.includes(matricula)) {
        if (!parkList.includes(matricula)) {
            parkList.push(matricula)
            return true;
        } else {
          return false;
        }}
    } else if (movimento === 'S' || movimento === 's') {
        if (parkList.includes(matricula)){ */
            const index = array.indexOf(variavelOuString); // aqui!
            array.splice(index, 1); // aqui!
 /*           return true;
        } else {
            console.log('Veículo não está no parque de estacionamento.');
            return false;
        }
    }
  }*/