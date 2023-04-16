let colaboradores = ["Rui", "Maria", "Joana", "Beatriz", "Pedro", "Salomé", "Iris", "Vicente", "Dinis", "Ruben"]

const form = document.getElementById("myForm").addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()

    const nome = document.getElementById("nomeColaborador").value

    colaboradores.push(nome)
    addColabTable(nome)
}

function addColabTable(nome){
    const table = document.getElementById("myTable")
    const line = `<tr><td>${nome}</td><td><input class="btn" type="button" value="ENTRAR"></td></tr>`
    table.innerHTML += line
}

const table = document.getElementById("myTable");
table.addEventListener("click", entrarTrab)

let colabCount = 0

function entrarTrab(event){
    const colaboradosPerc = document.getElementById("colaboradosPerc")
    if (event.target.value === "ENTRAR") {
        colabCount = colabCount + 1
        event.target.value = "SAIR";
    } else {
        event.target.value = "ENTRAR";
        colabCount = colabCount - 1
    }
    colaboradosPerc.innerHTML = `>>${colabCount*10}%<<`
    if (colabCount == 0){
        alert("Até amanhã")
    }
};