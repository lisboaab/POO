guestList = ['00-CC-00','01-CC-01','02-CC-02','03-CC-03','04-CC-04', '05-CC-05','06-CC-06','07-CC-07','08-CC-08','09-CC-09'];

parkList = [];

let lotPark = Number(prompt('Indique a lotacao maxima do parque: '));

let qtyCarros = 0;
let i = 0;
while(i < lotPark){
    let matricula = prompt('Indique a matricula');
    let movimento = prompt('Indique o movimento (E/S)');
    if (matricula === '00-00-00'){
        break
    }
    else{
        let val = parkValidator(matricula,movimento);
        if (val === true){
            parkManager(matricula,movimento);
            qtyCarros += 1;
            i++;
        }
        else {
            alert('O movimento nao foi possivel. Tente novamente')
        }
    }
}

function parkValidator(matricula,movimento){
    if ((guestList.includes(matricula)) && (parkList.length < lotPark) && (!parkList.includes(matricula))){
        return true
    }
    /*else if ((movimento.toLowerCase() === 's') && (!parkList.includes(matricula))){
        alert('Matricula nao esta no estacionamento')
        return false
    }*/
    else {
        return false
    }
}

function parkManager(matricula,movimento){
    if (movimento.toLowerCase() === 'e'){
        parkList.push(matricula);
        console.log('Entrou')
    }
    else if (movimento.toLowerCase() === 's'){
        var index = parkList.indexOf(matricula);
        if (index > -1) {
        parkList.splice(index, 1);
        }
        console.log('Saiu')
    }
    else {
        alert('Movimento invalido.')
    }
}

alert(`Entraram ${qtyCarros} carros no estacionamento`)