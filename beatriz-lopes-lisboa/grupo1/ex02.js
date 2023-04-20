const tabelaClass = [
    {nome: "maria",
    pontos: 9,
    nivel: 1
    },
    {nome: "carlos",
    pontos: 7,
    nivel: 1
    },
    {nome: "joao",
    pontos: 12,
    nivel: 2
    },
    {nome: "patricia",
    pontos: 14,
    nivel: 2
    }
];

function listaNivel(nivel){
    /* Lista os nomes dos usuários de determinado nivel */
    let newLista = tabelaClass.filter(user => user.nivel === nivel); //cria uma lista com os usuarios do nivel dado
    let text = ""
    for (user in newLista){
        text += newLista[user].nome + " "; // faz um alert com os nomes dos usuários
    }
    alert(text)
};

function somaPontos(nivel){
    /* Somas o pontos de todos os usuarios que pertencem em dado nivel */
    let newLista = [];
    
    for (const user of tabelaClass){
        if (user.nivel === nivel){
            newLista = newLista.concat(user);  // adicionar os obj dos usuarios do mesmo nivel a uma nova array
        }
    }


    for (const user of newLista){
        var soma = newLista.reduce((sum,user) => sum+user.pontos,0); //soma os pontos dos usuários da array criada
    } 
    return soma;
}

listaNivel(2)
let add = somaPontos(1);
alert(`A soma de pontos foi ${add}`)