// limpar um form
form.reset();

// limpar select
const select = document.getElementById('produtoCliente');
select.options[0].selected = true //-> seleciona a opcao de indice 0 que normalmente tem valor = ""; "Selecione uma opcao"


// PEGAR INFO DE UM RADIOBUTTON (baseado no nome do botao)
const iva = document.querySelector('input[name="nameInput"]:checked');
const ivaValue = iva.value;

ou 

const form = document.forms.nameOfTheForm;   //elemento: <form name="nameOfTheForm"...>
const rdBtn = form.elements.rdGenre;  // collection of elements elemento: <input type='radio' name="rdGenre" checked='true'...>
alert(rdBtn[index].value);

ou

const genre = document.getElementById('idOfRadioBtn');
genre.checked = 'true'
if (genre.checked === 'true'){}

// set a new value: variavel.value = 'newValue'



//INPUT EVENT OR CHANGE EVENT:
const myInput = document.getElementById('input1');
const result = document.getElementById('result');
myInput.addEventListener('input', function(){   //tbm pode ser 'change' que e triggered after loss of focus of the text box
    result.innerHTML = myInput.value
})


// SELECT/OPTION
/* Three ways to set the value of a <select>:
- Find the <option> and set option.selected to true
- Set select.value for the value
- Set select.selectedIndex to the option number */

const mySelection = document.getElementById('select'); // the next lines do the same thing
mySelection.options[2].selected = true;
mySelection.selectedIndex = 2;
mySelection.value = 'banana'
    
    //criando uma nova option:
    const mySelection = document.getElementById('select');
    const option = new Option(text, value, defaultSelected, selected) // new Option('Orange', 'orange')
    mySelection.add(option)


    //  fill an <select> element with data from an array
    const mySelection = document.getElementById('select');

    const fruits = ['Orange', 'Cherries', 'Cranberries'];
    let result2 = '';
    for (const fruit of fruits) {
    result+= `<option value='${fruit}'>${fruit}</option>`;}
    mySelection.innerHTML += result2;



// SUBMISSION  -  FORMS ON SUBMIT
        //sempre usar o preventDefault()
        const myForm = document.getElementById('myForm'); 
        myForm.addEventListener('submit', function(event) { 
            event.preventDefault();
            // function code 
        alert('Button Registar clicked')});
