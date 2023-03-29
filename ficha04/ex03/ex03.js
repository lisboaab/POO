function adicionar(){
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    let nome = document.getElementById("nome").value;
    let ano = document.getElementById("ano").value;
    let genero = document.getElementById("genero").value;
    let capa = document.getElementById("linkCapa").value;
    let tabela = document.getElementById("tabela");
    // console.log(nome, ano, genero, capa);
    if (ano > 1950 && ano <= 2023){
        let newTr = document.createElement("tr");
        newTr.innerHTML = `<td>${nome}</td>
        <td>${ano}</td>
        <td>${genero}</td>
        <td>${capa}</td>
        <td><button class="btnX">X</button></td>`
        alert("VALIDACAO OK")
        tabela.appendChild(newTr)
    }
    else {
        alert("erro!")
    }

    const btnX = document.querySelectorAll(".btnX");
    btnX.forEach(function(btn) {
        btn.addEventListener("click", function() {
            this.closest("tr").remove();
        })
    });
}

function reset(){
    let form = document.getElementById("form");
    form.reset();
}