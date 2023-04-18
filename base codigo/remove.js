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



function addItemToList(){
    const list = document.getElementById('shopList');
    list.innerHTML = '';

    for (const item of shoppingList){
        list.innerHTML += `<li> ${item.name}: ${item.quantity}</li>`
    }

    const li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => removeItem(i));
    }
};

function removeItem(index){
    shoppingList.splice(index, 1);
    addItemToList();
    console.log(shoppingList);
}
