guestList = ['00-CC-00','01-CC-01','02-CC-02','03-CC-03','04-CC-04', '05-CC-05','06-CC-06','07-CC-07','08-CC-08','09-CC-09'];
parkList = [];
const lotPark = +prompt('Qual a lotacao maxima do parque?');
let entradas = 0;

console.log(`A lotacao maxima e ${lotPark}`);
while (parkList.length < lotPark){
    if (parkList.length < lotPark) {
        let matricula = prompt('Qual a matricula?');
        let movimento = prompt('Qual movimento? (E/S)')
        if (matricula === '00-00-00'){
            break
        } else {
            parkValidator(matricula,movimento);
        }
    } else {
        console.log('Parque lotado!');
        break;
    }
}


function parkValidator(matricula, movimento) {
    if (movimento === 'e') {
        if (guestList.includes(matricula)) {
            if (!parkList.includes(matricula)) {
                parkManager(matricula, movimento);
                entradas += 1;
                parklist.push(matricula)
                return true;
            } else {
                console.log('Veículo já está no parque de estacionamento.');
                return false;
            }}
        else {
            console.log('Veículo não autorizado.');
            return false;
        }
    } else if (movimento === 's') {
        if (parkList.includes(matricula)){
            parkManager(matricula, movimento)
            return true;
        } else {
            console.log('Veículo não está no parque de estacionamento.');
            return false;
        }
    }
}

function parkManager(matricula,movimento){
    if (movimento.toLowerCase() === 'e'){
        parkList.push(matricula)
        console.log('Veiculo adicionado ao parque');
    }
    else if (movimento.toLowerCase() === 's'){
        const index = parkList.indexOf(matricula);
        parkList.splice(index, 1);
        console.log('Veiculo removido do parque');
    }
}

alert('Entraram ' + entradas + ' carros no parque.');