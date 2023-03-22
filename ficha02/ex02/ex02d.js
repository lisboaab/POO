function calcBodyMass(weight, height){
    bmi = weight / (height)**2; // ** é o símbolo da exponenciação, potência
    if (bmi < 18.5){
        alert("Your are Under Height!")
    }
    else if (bmi > 18.5 && bmi <29.9){
        alert("Your are Normal Height!")
    }
    else if ( 25 >= bmi >= 29.9){
        alert("Your are Over Height!")
    }
    else if ( 30 >= bmi >= 34.9){
        alert("Your are Obese I!")
    }
    else if ( 35 >= bmi >= 39.9){
        alert("Your are Obese II!")
    }
    else if ( bmi > 40){
        alert("Your are Obese III!")
    }
}

let weight = parseFloat(prompt("Your weight in KG"))
let height = parseFloat(prompt("Your heigth in M"))
calcBodyMass(weight, height)