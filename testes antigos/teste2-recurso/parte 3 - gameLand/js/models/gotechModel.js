export class Employee {
    name = "";
    department = [];
    workedHours = 0;
    #valueHour = 0;
    #previousCompanies = [];

    constructor (name,department,workedHours,valueHour = 30,previousCompanies){
        this.name = name,
        this.department = department,
        this.workedHours = workedHours,
        this.#valueHour = valueHour,
        this.#previousCompanies = previousCompanies
    }

    get name(){
        return this.name
    }
    set name(name){
        this.name = name
    }

    get department(){
        return this.department
    }
    set department(depart){
        this.department.push(depart)
    }

    get workedHours(){
        return this.workedHours
    }
    
    setWorkedHours(hour){
        if (this.workedHours >= 140 || (this.workedHours + hour) >= 140){
            throw Error("Nº máximo de horas de trabalho já atingido")
        }
        else {
            this.workedHours += hour
        }
    }

    get valueHour(){
        return this.#valueHour
    }
    set valueHour(value){
        this.#valueHour = value
    }

    get previousCompanies(){
        return this.#previousCompanies
    }
    set previousCompanies(companies){
        this.previousCompanies.psuh(companies)
    }

    addHours(nameEmployee, qtyHour){
        if (this.workedHours >= 140 || (this.workedHours + qtyHour) >= 140){
            throw Error("Nº máximo de horas de trabalho já atingido")
        }
        else {
            this.workedHours += qtyHour
        }
    }

    editCompanies(nameEmployee,newCompany){
        if(this.#previousCompanies.includes(newCompany)){
            throw Error("Company already in list")
        }
        else {
            this.#previousCompanies.push(newCompany)
        }
    }
}
