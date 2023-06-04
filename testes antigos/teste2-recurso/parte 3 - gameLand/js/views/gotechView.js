import { Employee } from "../models/goTechModel.js";

let listEmployees = [];

listEmployees.push(new Employee(
    "Carlos Andrade",
    ["Informatica", "Electronica"],
    12,
    35,
    ["MKTalent", "F3M "]
))

listEmployees.push(new Employee(
    "Maria Pereira ",
    ["Informatica", "Redes"],
    20,
    25,
    ["SKRey"]
))

listEmployees.push(new Employee(
    "Carla Fonseca",
    ["Marketing"],
    25,
    30,
    ["SKRey", "MKTalent "]
))

console.log(listEmployees)

// BTN F1 - HORAS TRABALHADAS DE TODOS OS FUNCIONÁRIOS
document.getElementById("btnF1").addEventListener("click", function(){
    let totalHours = 0;
    listEmployees.forEach(function(e){
        totalHours += e.workedHours;
    })
    alert(`O total de horas trabalhadas por todos os funcionários é de ${totalHours} horas`)
})

// BTN F2 - DEVOLVE VALOR TOTAL A PAGAR A FUNCIONÁRIO ESPECÍFICO
document.getElementById("btnF2").addEventListener("click", function(){
    let employeeName = prompt("Qual trabalhador buscas?");

    let employee = listEmployees.find(e => e.name.toLowerCase() === employeeName.toLowerCase())
    if(!employee){
        throw Error("Trabalhador não encontrado")
    }
    let pricePerHour = employee.valueHour;
    let workedHours = employee.workedHours;

    let toPay = pricePerHour*workedHours;
    alert(`${employeeName} deve receber ${toPay}€`)
})

// BTN F3 - DEVOLVE EMPRESAS QUE O FUNCIONÁRIO TRABALHOU
document.getElementById("btnF3").addEventListener("click", function(){
    let employeeName = prompt("Qual trabalhador buscas?");

    let employee = listEmployees.find(e => e.name.toLowerCase() === employeeName.toLowerCase())
    if(!employee){
        throw Error("Trabalhador não encontrado")
    }
    alert(`${employeeName} trabalhou em: ${employee.previousCompanies}`)
})

// BTN F4 - Devolver a nome do funcionário com mais horas de trabalho
document.getElementById("btnF4").addEventListener("click", function(){
    let mostWorkingEmployee;
    let hoursMostWorked = 0;

    listEmployees.forEach(function(e){
        if (e.workedHours > hoursMostWorked){
            mostWorkingEmployee = e.name
        }
    })
    alert(`O funcionário com mais horas de trabalho é ${mostWorkingEmployee}`)
})

// BTN F5 - ADD EMPRESA E ADD HORAS TRABALHADAS
document.getElementById("btnF5").addEventListener("click", function(){
    let employeeName = prompt("Insira um trabalhador");
    let employee = listEmployees.find(e => e.name.toLowerCase() === employeeName.toLowerCase())
    if(!employee){
        throw Error("Trabalhador não encontrado")
    }

    let hours = +prompt("Quantas horas queres adicionar?");
    if (isNaN(hours)){
        throw Error("Insira números para representar as horas trabalhadas")
    }

    let company = prompt("Qual empresa desejas adicionar?");

    employee.setWorkedHours(hours)

    employee.editCompanies(employee.name,company)
    console.log(employee)
})

// ATT TABELA
let tbody = document.getElementById("tbody");
let totalValue = 0;
listEmployees.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
listEmployees.forEach(function(e){
    let total = e.workedHours*e.valueHour
    let line = `<td>${e.name}</td><td>${e.department}</td><td>${e.workedHours}</td><td>${e.valueHour}</td><td>${total}</td>`
    tbody.innerHTML += line;
    totalValue += total
})
document.getElementById("total").innerHTML = `Total = ${totalValue}`
