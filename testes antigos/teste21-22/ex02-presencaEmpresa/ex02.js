const colaboradores = ['Rui', 'Maria', 'Joana', 'Beatriz', 'Pedro', 'Salomé', 'Iris', 'Vicente', 'Dinis', 'Ruben'];

var numColaboradoresDentro = 0;
var percentagemDentro = 0;

const tableBody = document.getElementById('tableBody');


for (const colaborador of colaboradores) {
    const line = `<tr><td>${colaborador}</td><td><input class='btn' type="button" data-nome="${colaborador}" value="ENTRAR"></td></tr>`
    tableBody.innerHTML += line
}


const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const nome = event.target.dataset.nome;
        if (btn.value === 'ENTRAR'){
            numColaboradoresDentro += 1;
            btn.value = 'SAIR';
            attPorcentagem();
            alert(`O colaborador ${nome} entrou no predio`)
        }
        else {
            numColaboradoresDentro -= 1;
            btn.value = 'ENTRAR';
            attPorcentagem();
            alert(`O colaborador ${nome} saiu do predio`)
        }
        if (numColaboradoresDentro === 0) {
            alert("ATÉ AMANHÃ!");
    }
    })
    
})

function adicionarColaborador(){
    let nome = document.getElementById('nomeColaborador').value.toLowerCase();
    if (!colaboradores.some(c => c.toLowerCase().includes(nome)))
        {colaboradores.push(nome);
            attLista();
            attPorcentagem();
    } else {
        alert(`O colaborador ${nome} já está na lista`)
    }
}


function attPorcentagem(){
    percentagemDentro = Math.round((numColaboradoresDentro / colaboradores.length) * 100);
    document.getElementById("percentagem").innerHTML = `>> ${percentagemDentro}% <<`;
}



function attLista() {
    // Limpa o corpo da tabela
    tableBody.innerHTML = '';
  
    // Adiciona cada colaborador como uma nova linha na tabela
    colaboradores.forEach(colaborador => {
      const line = `<tr><td>${colaborador}</td><td><input class='btn' type="button" data-nome="${colaborador}" value="ENTRAR"></td></tr>`;
      tableBody.innerHTML += line;
    });
  
    // Atualiza os eventos dos botões
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        const nome = event.target.dataset.nome;  // 'event.target' é uma propriedade do objeto Event em JavaScript que representa o elemento HTML que disparou o evento
        if (btn.value === 'ENTRAR'){
          numColaboradoresDentro += 1;
          btn.value = 'SAIR';
          attPorcentagem();
          alert(`O colaborador ${nome} entrou no predio`);
        } else {
          numColaboradoresDentro -= 1;
          btn.value = 'ENTRAR';
          attPorcentagem();
          alert(`O colaborador ${nome} saiu do predio`);
          if (numColaboradoresDentro === 0) {
            alert("ATÉ AMANHÃ!");
        }
        }
      });
    });
  }
  