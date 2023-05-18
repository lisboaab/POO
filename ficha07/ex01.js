class Dice {
    #faceValue = [];
    #quantity = 0;

    constructor(){
        this.#faceValue = [1,2,3,4,5,6];
        this.#quantity = 6
    }

    get _faceValue() {
        return this.#faceValue;
    }
    
    set _faceValue(value) {
        this.#faceValue = value;
    }
    
    getQuantityFaces() {
        return this.#quantity;
    }
    
    roll() {
        const random = Math.floor(Math.random() * this.#quantity);
        return this.#faceValue[random];
    }
}



const dice = new Dice();
const rolls = [];

for (let i = 0; i < 100; i += 1) {
    let roll = dice.roll();
    rolls.push(roll);
    //rolls.push(dice.roll());
}



// calculate frequency of rolls
const frequency = {};
for (let i = 0; i < rolls.length; i += 1) {
  frequency[rolls[i]] = (frequency[rolls[i]] || 0) + 1;
}


// create table with frequency of rolls and display it
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
const firstRow = document.createElement('tr');
const faceCell = document.createElement('td');
const secondRow = document.createElement('tr');
const frequencyCell = document.createElement('td');

faceCell.innerHTML = 'Face';
firstRow.appendChild(faceCell);
frequencyCell.innerHTML = 'Frequency';
secondRow.appendChild(frequencyCell);


for (const face in frequency) {
  const td = document.createElement('td');
  td.innerHTML = face;
  firstRow.appendChild(td);
}


for (const face in frequency) {
  const td = document.createElement('td');
  td.innerHTML = frequency[face];
  secondRow.appendChild(td);
}


tableBody.appendChild(firstRow);
tableBody.appendChild(secondRow);
table.appendChild(tableBody);

document.body.appendChild(table);