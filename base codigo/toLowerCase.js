function adicionarColaborador(){
    let nome = document.getElementById('nomeColaborador').value.toLowerCase(); //aqui!
    if (!colaboradores.some(c => c.toLowerCase().includes(nome))) //aqui!
        {colaboradores.push(nome);
            attLista();
    } else {
        alert(`O colaborador ${nome} já está na lista`)
    }
}