const produtos = [
    {
        nome: "Cenouras",
        categoria: "Legumes",
        quantidade: 2
    },
    {
        nome: "Alface",
        categoria: "Legumes",
        quantidade: 1
    },
];


const form = document.getElementById("formLista");
const tabelaAdd = document.getElementById("tableBody");
const btnNumProdutos = document.getElementById("btnNumProdutos");
const btnprodutosPorCategoria = document.getElementById("btnprodutosPorCategoria");
const btnQtyTotal = document.getElementById("btnQtyTotal");
const btnLimparLista = document.getElementById("btnLimparLista"); 
const btnNovaCategoria = document.getElementById("btnNovaCategoria");

const addNaTabela = () => {
    let linha = "";
    for (const prod of produtos) {
        linha += `<tr>
            <td>${prod.nome}</td>
            <td>${prod.categoria}</td>
            <td>${prod.quantidade}</td>
        </tr>`;
      }
      tabelaAdd.innerHTML = linha;
};
addNaTabela();

const addProduto = (event) => {
    event.preventDefault()

    const nomeProduto = document.getElementById("nome").value;
    const categoriaProduto = document.getElementById("categoria").value;
    const qtyProduto = Number(document.getElementById("qty").value);

    novoObj = {
        nome: nomeProduto,
        categoria: categoriaProduto,
        quantidade: qtyProduto
    }

    if (produtos.some((prod) => prod.nome.toLowerCase() === novoObj.nome.toLowerCase())) {
        return alert('O produto ja existe!');
    }

    produtos.push(novoObj);
    addNaTabela();
};
form.addEventListener("submit", addProduto);

const numProdutos = () => {
    let count = 0;
    for(const prod of produtos){
        count += 1;
    }
    alert(`A lista de compras tem ${count} produtos`)
};
btnNumProdutos.addEventListener("click", numProdutos);

const prodPerCat = () => {
    let cat = prompt("Qual categoria deseja pesquisa?")
    let count = 0;
    for(const prod of produtos){
        if (prod.categoria.toLowerCase() === cat.toLowerCase()){
        count += 1;
        };
    }
    alert(`A lista de compras tem ${count} produtos da categoria ${cat}`)
};
btnprodutosPorCategoria.addEventListener("click", prodPerCat);

const quantidadeTotal = () => {
    let qtyTotal = 0;
    for(const prod of produtos){
        qtyTotal += prod.quantidade
    }
    alert(`Precisam sem comprados ${qtyTotal} produtos`)
};
btnQtyTotal.addEventListener("click", quantidadeTotal);

const limpar = () => {
    tabelaAdd.innerHTML = "";
}
btnLimparLista.addEventListener("click", limpar);


const novaCategoria = () => {
    let novaCat = prompt("Qual categoria deseja adicionar?");
    const categoria = document.getElementById("categoria");

    if ([...categoria.options].some(option => option.value.toLowerCase() === novaCat.toLowerCase())) {
        alert("Esta categoria já existe!");
        return;
    }

    const novaOpcao = document.createElement("option");
    novaOpcao.value = novaCat;
    novaOpcao.textContent = novaCat;
    categoria.appendChild(novaOpcao);

    // Filtrar os produtos com a nova categoria e adicioná-los à tabela
    let linha = "";
    for (const prod of produtos) {
        if (prod.categoria.toLowerCase() === novaCat.toLowerCase()) {
            linha += `<tr>
                <td>${prod.nome}</td>
                <td>${prod.categoria}</td>
                <td>${prod.quantidade}</td>
            </tr>`;
        }
    }
    tabelaAdd.innerHTML += linha;
}
btnNovaCategoria.addEventListener("click", novaCategoria);