class Car {
    #brand = "";
    #licensePlate = "";
    #color = "";
    #currentFuel = 0;
    #maximumFuel = 0;
    #consumption = 0;
    #fuelType = "";

    constructor(brand, licensePlate, color, currentFuel,maximumFuel,consumption,fuelType){
        this.#brand = brand;
        this.#licensePlate = licensePlate;
        this.#color = color;
        this.#currentFuel = currentFuel;
        this.#maximumFuel = maximumFuel;
        this.#consumption = consumption;
        this.#fuelType = fuelType;
    }


    set brand(brand){
        this.#brand = brand;
    }
    get brand(){
        return this.#brand
    }

    get color(){
        return this.#color
    }

    set licensePlate(plate){
        this.#licensePlate = plate;
    }
    get licensePlate(){
        return this.#licensePlate
    }

    set currentFuel(curr){
        if (curr > 0 && curr < this.#maximumFuel){
            this.#currentFuel = curr
        }
    }
    get currentFuel(){
        return this.#currentFuel
    }

    set maximumFuel(max){
        this.#maximumFuel = max;
    }
    get maximumFuel(){
        return this.#maximumFuel
    }

    set consumption(cons){
        if (cons > 0){
            this.#consumption = cons
        }
    }
    get consumption(){
        return this.#consumption
    }

    set fuelType(type){
        let tempValue = value;
        if (tempValue !== 'Gasoline' && tempValue !== 'Diesel') {
        tempValue = 'Gasoline';
        }
        this.#fuelType = tempValue;
    }
    get fuelType(){
        return this.#fuelType
    }


    fillTank(liters){
        this.#currentFuel += liters
    }

    calculateConsumption(kms) {
        const usedFuel = (kms * this.consumption) / 100;
        this.#currentFuelTank -= usedFuel;
    }
}


const ford = new Car("Ford", "91-GH-15", "Green", 40, 60, 5, "Diesel");
const opel = new Car("Opel", "23-AB-23", "White", 50, 55, 6.5, "Gasoline");
const nissan = new Car("Nissan", "12-CX-45", "Black", 22, 70, 4.5, "Diesel");

const cars = [ford, opel, nissan];

function carPerBrand(brand){
    return cars.filter((car) => car.brand === brand).length;
}
