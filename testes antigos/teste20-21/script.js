const btnAddProduto = document.getElementById('btnAdd');
const form = document.getElementById('addItemCompra');


const produtos = [];


function pushProduto(event){
    event.preventDefault();
    const nomeCliente = document.getElementById('nomeCliente').value;
    const produtoCliente = document.getElementById('produtoCliente').value;
    const iva = document.querySelector('input[name="iva"]:checked');
    const ivaValue = iva.value;

    prod=''
    if (produtoCliente === '200'){
        prod = 'Desktop'
    }
    else if (produtoCliente === '500'){
        prod = 'Portátil'
    }
    else if (produtoCliente === '300'){
        prod = 'Monitor'
    }
    else if (produtoCliente === '50'){
        prod = 'Teclado'
    }
    else if (produtoCliente === '20'){
        prod = 'Rato'
    }
    else if (produtoCliente === '250'){
        prod = 'Impressora'
    }
    else if (produtoCliente === '20'){
        prod = 'Disco Externo'
    }
    else if (produtoCliente === '100'){
        prod = 'Painel Solar'
    }
    

    qty = 1;
    total = (produtoCliente*qty) + (produtoCliente*qty)*(ivaValue)/100

    newobj = {
        nome: nomeCliente,
        produto: prod,
        //quantidade: qty,
        pu: produtoCliente,
        iva: ivaValue,
        subtotal: total
    }

    let produtoExiste = false;
    for (const produto of produtos){
        if (produto.produto === newobj.produto &&
            //produto.quantidade === newobj.quantidade &&
            produto.pu === newobj.pu &&
            produto.iva === newobj.iva &&
            produto.subtotal === newobj.subtotal) {
            produtoExiste = true;
            break;
        }
    }

    if (!produtoExiste){
        produtos.push(newobj)
    }
    else {
        alert('O produto já existe');
    }
    
    attTabela();
    const select = document.getElementById('produtoCliente');
    select.options[0].selected = true
}

function attTabela(){
    const tabela = document.getElementById('tableBody');
    linha=''
    for (const product of produtos){
        linha += `<tr>
            <td>${product.produto}</td>
            <td><input type='number' id='qtyTxtArea' class='quantidade' value=1></td>
            <td class='pu'>${product.pu}</td>
            <td class='iva'>${product.iva}</td>
            <td class='subtotal'>${product.subtotal}</td>
        </tr>`;
      }
        tabela.innerHTML = linha;
        console.log(produtos)
        const quantidades = document.querySelectorAll('.quantidade');
        for (let i = 0; i < quantidades.length; i++) {
            quantidades[i].addEventListener('input', recalcularSubtotal);
        }
}

function recalcularSubtotal() {
    const linhas = document.querySelectorAll('#tableBody tr');
    linhas.forEach(linha => {
        const qtdInput = linha.querySelector('input[type="number"]');
        const qtd = parseInt(qtdInput.value);
        if (qtd === 0) {
            linha.remove();
        } else {
            const pu = parseFloat(linha.querySelector('.pu').textContent);
            const iva = parseFloat(linha.querySelector('.iva').textContent);
            const subtotal = (pu * qtd) + (pu * qtd * iva / 100);
            linha.querySelector('.subtotal').textContent = subtotal.toFixed(2);
        }
    });
  }


const btnComprar = document.getElementById('btnComprar');
btnComprar.addEventListener('click', ()=>{
    let nome = document.getElementById('nomeCliente').value;
    let total = 0;
    const linhas = document.querySelectorAll('#tableBody tr');
    linhas.forEach(linha => {
        const subtotal = parseFloat(linha.querySelector('.subtotal').textContent);
        total += subtotal;
    });
    alert(`O cliente ${nome} tem que pagar ${total}€`)
});

const btnAdcProtudo = document.getElementById('btnAdcProtudo');
btnAdcProtudo.addEventListener('click', () => {
    const produto = prompt('Nome do produto:');
    const valor = Number(prompt('Valor: (em euros)'));
    let prodExiste = false;
    for (const prod of produtos){
        if(produto.toLowerCase() === prod.produto.toLowerCase()){
            prodExiste = true;
            prod.subtotal += valor;
            attTabela();
        }
    }
    if (!prodExiste) {
        const newobj = {
            nome: '',
            produto: produto,
            //quantidade: '',
            pu: valor,
            iva: 23,
            subtotal: valor
        }
        produtos.push(newobj);
        attTabela();
    }


});

form.addEventListener('submit', pushProduto);