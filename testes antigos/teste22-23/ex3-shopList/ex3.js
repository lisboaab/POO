const shoppingList = [];

document.addEventListener('DOMContentLoaded', addItemToList);

const form = document.getElementById('formShopList');
form.addEventListener('submit', addItemToArray);

function addItemToArray(event){
    event.preventDefault();
    const item = document.getElementById('itemName').value;
    const qty = document.getElementById('itemQty').value;

    const newItem = {
        name: item,
        quantity: qty
    };
    shoppingList.push(newItem);
    addItemToList();
    form.reset();
    console.log(shoppingList);
}

function addItemToList(){
    const list = document.getElementById('shopList');
    list.innerHTML = '';

    for (const item of shoppingList){
        list.innerHTML += `<li> ${item.name}: ${item.quantity}</li>`
    }

    const li = document.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => removeItem(i));
    }
};

function removeItem(index){
    shoppingList.splice(index, 1);
    addItemToList();
    console.log(shoppingList);
}
