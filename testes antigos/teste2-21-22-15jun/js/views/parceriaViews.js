import { Parceiras } from "../models/parceriaModels.js";

let parceirias = [];

parceirias.push(new Parceiras("MTK Digital Agency","mtk@mtk.com",["TSIW", "Design"],5,["Imagem gráfica MKTalent", "Campanha publicitária"]));
parceirias.push(new Parceiras("BindTunning","contacto@bindtunning.com",["TSIW"],3,["Web Parts for Sharepoint", "Sharepoint Intranet Templates"]));
parceirias.push(new Parceiras("Kendir Studios","edu@kendir.com",["TSIW", "Multimédia", "Design"],4,["Desenvolvimento aventuras educativas"]));
console.log(parceirias)


// Total de projetos
document.getElementById("btnF1").addEventListener("click",function(){
    let qtyProjetos = 0;
    parceirias.forEach((p) => {
        qtyProjetos += p.projetos.length
    })
    alert(`Existem ${qtyProjetos} projetos`)
})


// Busca empresas ligadas a um curso inserido
document.getElementById("btnF2").addEventListener("click", function(){
    let curso = prompt("Qual curso desejas pesquisar?");
    let parc = parceirias.filter((p) => p.cursos.some((c) => c.toLowerCase() === curso.toLowerCase()));
    // let parc = parceirias.filter((p) => p.cursos.includes(curso.toLowerCase()));
    if (parc.length === 0){
        throw Error("Não existe nenhuma parceria ligada a esssa curso")
    }
    let names = parc.map(p => p.nome).join(", ");
    alert(`As empresas parceiras do curso ${curso} são: ${names}`)
})



// Devolve a empresa parceira com mais projetos em curso
document.getElementById("btnF3").addEventListener("click", () => {
    let maxProj = 0
    let parcComMaisProjetos = ""
    for (let parceria of parceirias){
        if(parceria.projetos.length > maxProj){
            maxProj = parceria.projetos.length
            parcComMaisProjetos = parceria.nome
        }
    }
    alert(`A empresa com mais projetos em curso é ${parcComMaisProjetos}`)
})



// Devolve o numero de empresas parceiras de determinado curso inserido
document.getElementById("btnF4").addEventListener("click", function(){
    let curso = prompt("Qual curso desejas pesquisar?");
    let parc = parceirias.filter((p) => p.cursos.some((c) => c.toLowerCase() === curso.toLowerCase()));
    if (parc.length === 0){
        throw Error("Não existe nenhuma parceria ligada a esssa curso")
    }
    let numEmp = parc.length;
    alert(`O curso ${curso} tem ${numEmp} empresas parceiras`)
})



// Adiciona projeto em curso a uma parceira existente
document.getElementById("btnF5").addEventListener("click", function(){
    let empresa = prompt("Insira uma empresa");

    let empresaFind = parceirias.find((p) => p.nome.toLowerCase() === empresa.toLowerCase())
    if (empresaFind){
        let projeto = prompt("Insira um projeto");
        if(empresaFind.projetos.includes(projeto)){
            throw Error("Projeto já existente")
        } else{
            empresaFind.addProject(projeto)
            attTabela()
            console.log(empresaFind.projetos)
            alert(`Projeto ${projeto} adicionado a empresa ${empresa} com sucesso!`)
        }
    } else {
        throw Error("Empresa não encontrada")
    }
})



// Preenche a tabela de acordo com os objetos da array
export function attTabela(){
    let tbody = document.getElementById("tbody");
    let line = "";
    tbody.innerHTML = "";
    parceirias.sort((a, b) => a.nome.localeCompare(b.nome));
    parceirias.forEach((p) => {
        line = `<tr><td>${p.nome}</td><td>${p.cursos}</td><td>${p.projetos.length}</td><td><button class="btnRemover">Remover</button></td></tr>`;
        tbody.innerHTML += line
        console.log(parceirias.indexOf(p)) // pega o index do objeto do loop
    });

    //OU parceirias.forEach((p, index) => {
    //     line = `<tr><td>${p.nome}</td><td>${p.cursos}</td><td>${p.projetos.length}</td><td><button class="btnRemover" id="${index}" >Remover</button></td></tr>`;
    //     tbody.innerHTML += line
    //     console.log(parceirias[index])
    // });

    let btns = document.getElementsByClassName("btnRemover");
  
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          parceirias.splice(i,1)    //remove da array o obj com o indice indicado
          attTabela()
        });
    }
}

attTabela()