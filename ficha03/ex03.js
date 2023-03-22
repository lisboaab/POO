const tabela = document.createElement('table');
tabela.className = 'classeTabela';
tabela.innerHTML = '<tr><th>Escola</th><th>Local</th></tr><tr><td>ESMAD</td><td>Vila do Conde</td></tr>';

tabela.style.border = '2px solid black';
// criar as borders pra cada th e td com 1px:
const celulas = tabela.querySelectorAll('th, td'); 
for (let i = 0; i < celulas.length; i++) {
      celulas[i].style.borderBottom = '1px solid black';
      celulas[i].style.borderRight = '1px solid black';
}


document.body.appendChild(tabela);


const novaLinha = document.createElement('tr');
novaLinha.innerHTML = '<td>ISEP Porto</td>';

const tbl = document.getElementsByClassName('classeTabela');
tbl[0].appendChild(novaLinha);

tabela.rows[1].cells[1].innerHTML= 'Vila do Conde/Póvoa de Varzim'

const headerTabela = document.querySelectorAll('th');
for (h of headerTabela){
    h.remove();}


