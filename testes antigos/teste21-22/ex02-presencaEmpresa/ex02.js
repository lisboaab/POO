const colaboradores = ['Rui', 'Maria', 'Joana', 'Beatriz', 'Pedro', 'Salomé', 'Iris', 'Vicente', 'Dinis', 'Ruben'];

var numColaboradoresDentro = 0;
var percentagemDentro = 0;

const tableBody = document.getElementById('tableBody');

for (const colaborador of colaboladores) {
    const linha = document.createElement('tr');
  
    const nomeCell = document.createElement('td');
    nomeCell.textContent = colaborador;
    linha.appendChild(nomeCell);
  
    const acaoCell = document.createElement('td');
    const botaoEntrar = document.createElement('button');
    botaoEntrar.textContent = 'Entrar';
    botaoEntrar.setAttribute('id', `btnEntrar${colaborador}`);
    botaoEntrar.addEventListener('click', () => {
      entrar(colaborador);
    });
    acaoCell.appendChild(botaoEntrar);
    linha.appendChild(acaoCell);
  
    tableBody.appendChild(linha);
}

function entrar(colaborador) {
    const botaoEntrar = document.getElementById(`btnEntrar${colaborador}`);
    botaoEntrar.textContent = 'Saida';
    botaoEntrar.addEventListener('click', () => {
        saida(colaborador);
    });
    alert(`O colaborador ${colaborador} entrou no prédio`);
    attPorcentagem();
}

function saida(colaborador) {
    const botaoEntrar = document.getElementById(`btnEntrar${colaborador}`);
    botaoEntrar.textContent = 'Entrar';
    botaoEntrar.addEventListener('click', () => {
        entrar(colaborador);
    });
    alert(`O colaborador ${colaborador} saiu do prédio`);
    attPorcentagem();
}
  

function adicionarColaborador(){
    let nome = document.getElementById('nomeColaborador').value;
    if (!colaboradores.includes(nome.toLowerCase()))
        {const linha = document.createElement('tr');

        const nomeCell = document.createElement('td');
        nomeCell.textContent = nome;
        linha.appendChild(nomeCell);

        const acaoCell = document.createElement('td');
        const botaoEntrar = document.createElement('button');
        botaoEntrar.textContent = 'Entrar';
        botaoEntrar.addEventListener('click', () => {
            saida(nome);
        });
        acaoCell.appendChild(botaoEntrar);
            linha.appendChild(acaoCell);

        tableBody.appendChild(linha);
        colaboradores.push(nome);
    } else {
        alert(`O colaborador ${nome} ja esta na lista`)
    }
}

function attPorcentagem(){
    percentagemDentro = Math.round((numColaboradoresDentro / colaboradores.length) * 100);
    document.getElementById("percentagem").innerHTML = ">> " + percentagemDentro + "% <<";
}

if (numColaboradoresDentro === 0) {
        alert("ATÉ AMANHÃ!");
}