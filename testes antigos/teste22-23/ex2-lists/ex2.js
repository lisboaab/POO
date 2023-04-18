const fruits = ['apple', 'orange', 'plum', 'pineapple'];

function  manipulateList(list, operation){
    if (operation === 'reverse'){
        return list.slice().reverse(); //  o método .slice() é usado para criar uma cópia da array original, e então executar a operação de ordenação ou inversão nessa cópia, ao invés de alterar a array original
    }
    else if (operation === 'sort'){
        return list.slice().sort();
    }
    else if (operation === 'extract'){
        const randomIndex = Math.floor(Math.random() * list.length);
            const subarray = list.slice(randomIndex); // extrai um subarray com 3 elementos a partir do índice aleatório
            console.log(randomIndex);
            return subarray;
    }
}

let reverse = manipulateList(fruits, 'reverse');
console.log(reverse);
let sort = manipulateList(fruits, 'sort');
console.log(sort);
let extract = manipulateList(fruits, 'extract');
console.log(extract);