const line = `<tr><td>${colaborador}</td><td><input class='btn' type="button" data-nome="${colaborador}" value="ENTRAR"></td></tr>`
// tem que salvar o atributo data-nome como o nome da pessoa ------->


const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const nome = event.target.dataset.nome; //aqui!
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
    })
    
})