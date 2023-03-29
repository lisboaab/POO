function addOutro(){
    let outro = prompt("Qual outro perfil quer adicionar?");
    let selection = document.getElementById("perfil");
    var option = document.createElement("option");
    option.text = outro;
    selection.add(option);
    return outro
}
  

function adicionar(){
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    let nome = document.getElementById("nome").value;
    let perfil = document.getElementById("perfil").value;
    let curso = document.querySelector('input[name="curso"]:checked').value;
    
    let sessaoCheckboxes = document.getElementsByName("sessao");
    let sessaoAnswer = [];
    sessaoCheckboxes.forEach((checkbox => {
        if (checkbox.checked) {
            sessaoAnswer.push(checkbox.value);
        }
    }))
    //console.log(sessaoAnswer)

    if (perfil === "Outro"){
        perfil = addOutro();   
    }

    let newTr = document.createElement("tr");
    newTr.innerHTML = `<td>${nome}</td>
    <td>${curso}</td>
    <td>${perfil}</td>
    <td>${sessaoAnswer}</td>`;
    let tabela = document.getElementById("tabela");
    tabela.appendChild(newTr);
}

function contar(){
    let tabela = document.getElementById("tabela");
    let numInscritos = (tabela.rows.length) - 1;
    alert(`O número de inscritos até o momento é ${numInscritos}`)
}