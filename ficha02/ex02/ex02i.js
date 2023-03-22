function addArguments(){
    let result = 0;
    for (let i=0;i<arguments.length;i++){
        result += arguments[i]
    }
    alert(result)
}

addArguments(1,2,3,4,5,6,7);