guestList = ['00-CC-00','01-CC-01','02-CC-02','03-CC-03','04-CC-04', '05-CC-05','06-CC-06','07-CC-07','08-CC-08','09-CC-09'];

parkList = [];

let lotPark = Number(prompt('Indique a lotacao maxima do parque: '));

let qtyCarros = 0;
let i = 0;
let matricula = prompt('Indique a matricula');
while(matricula != '00-00-00'){
    let movimento = prompt('Indique o movimento (E/S)');
    let val = parkValidator(matricula,movimento);
    if (val === true){
        parkManager(matricula, "e");
        qtyCarros += 1;
    }
    else if (val === false){
        parkManager(matricula, "s");
    }
    matricula = prompt('Indique a matricula');
}
alert(`Entraram ${qtyCarros} carros no estacionamento`)

function parkValidator(matricula,movimento){
    if ((guestList.includes(matricula)) && (parkList.length < lotPark) && (!parkList.includes(matricula))){
        return true
    }
    /*else if ((movimento.toLowerCase() === 's') && (!parkList.includes(matricula))){
        alert('Matricula nao esta no estacionamento')
        return false
    }*/
    else if (parkList.includes(matricula)){
        return false
    }else{
        alert('O movimento nao foi possivel. Tente novamente');
    }
}

function parkManager(matricula,movimento){
    if (movimento == 'e'){
        parkList.push(matricula);
        console.log('Entrou')
        i++;
    }
    else if (movimento == 's'){
        var index = parkList.indexOf(matricula);
        if (index > -1) {
        parkList.splice(index, 1);
        }
        console.log('Saiu');
        i--;
    }
    else {
        alert('Movimento invalido.')
    }
}
