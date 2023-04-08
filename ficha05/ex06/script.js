const menu = {
    width: 100,
    heigth: 160,
    title: "my menu"
}

function multiplyNumericMenu(obj){
    console.log(obj)
    for (key in obj){
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    console.log(obj)
}

multiplyNumericMenu(menu);