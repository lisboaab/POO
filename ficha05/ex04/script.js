const user = {
    name: "John",
    surname: "Smith",
}

const games = {}

function isEmpty(obj){
    if (Object.keys(obj).length === 0){
        return true
    }
    else {
        return false
    }
}
// ou só const isEmpty = (obj) => Object.keys(obj).length === 0;

console.log(isEmpty(user));
console.log(isEmpty(games));