function concatenaArrays(array1, array2){
    let novoArray
    for (const i of array2){
        if (!array1.includes(i)){
            novoArray = array1.concat(i);
        }
    }
    //array1.concat(array2)
    novoArray.sort();
    console.log(novoArray);
}

const array1 = [1,5,3,4,8,2];
const array2 = [3,1,4,9];

concatenaArrays(array1, array2)