//Add objects information
const user = {};

const person = {
	name: 'beatriz',
	age: 19,
	grade:  '16'	
}

user.push(person)



//Add elements in a array
let fruits = ['apple', 'orange', 'plum']
fruits[3] = 'pineapple'; //-> adc pineapple na posicao 3 da array

    

//Delete the objects information
const user2 = {};

user2.name = 'John';
user2.surname = 'Smith';
user2.name = 'Pete';

delete user2.name;

console.table(user2);


/*   Add / Remove elements:*
    - push(...elems) - add elements to the end
    - pop() - extracts an element from the end
    - shift() - extracts an element from the beginning
    - unshift(...elems) - add elements to the beginning
    - splice(pos, delCount, ...elems) - in the pos index, deletes delCount elements and inserts
    elems
    - slice(init, end) - creates new array and copies elements from position init to end
    - concat(...elems) - returns new array: copies current members and adds elems to it
*/