const gessList = ['00-CC-00','01-CC-01','02-CC-02','03-CC-03','04-CC-04', '05-CC-05','06-CC-06','07-CC-07','08-CC-08','09-CC-09']

let parkList = []

const lotPark = prompt("Qual é a lotação do parque?")

const form = document.getElementById("myForm").addEventListener("submit", submeterForm)

function submeterForm(e){
    e.preventDefault()
    const matricula = document.getElementById("matriculaCarro").value 
    const movimento = document.getElementById("tipoMovimento").value.toUpperCase()

    if (movimento == "S" || movimento == "E"){
        parkValidator(matricula, movimento)
    }else{
        alert("Insira um movimento válido!")
    }
}

let count = 0
let total = 0

function parkValidator(matricula, movimento){
    if (movimento == "E"){
        if (matricula == "00-00-00"){
            parkList = []
            alert(`Terminou o programa! Entraram ${total} carros no seu estacionamento!`)
            console.log("Programa terminado")
        }else if (gessList.some(carro => carro == matricula) == true && count < lotPark && parkList.some(carro => carro == matricula) == false){
            parkManager(matricula, "E")
        }else{
            alert("O movimento não é possível.")
        }
    }else{
        if (parkList.some(carro => carro == matricula) == true){
            parkManager(matricula, "S")
        }else{
            alert("O movimento não é possível.")
        }
    }
}

function parkManager(matricula, movimento){
    if (movimento == "E"){
        parkList.push(matricula)
        console.log(parkList)
        count += 1
        total += 1
    }else{
        const index = parkList.findIndex(item => item == matricula)
        parkList.splice(index, 1)
        console.log(parkList)
        count -= 1
    }
}