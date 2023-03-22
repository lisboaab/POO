function echo(s, n){
    let qty  = 0;
    let string = "";
    while(qty != n){
        string += s;
        qty++;
    }
    console.log(string)
}

let palavra = prompt("Palavra")
let vezes = +prompt("Quantas vezes a repetir?")
echo(palavra, vezes)