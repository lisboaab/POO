const salaries = {
    john: 100,
    ann: 160,
    pete: 130
}

var sumAll = (salaries) => {
    sum = 0;
    for (key in salaries){
        sum += salaries[key];
    }
    return sum
} 

console.log(sumAll(salaries));