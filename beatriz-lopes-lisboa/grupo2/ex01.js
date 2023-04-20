const contacts = [];
const form = document.getElementById("form-contacts");

const getInfo = (event) => {
    event.preventDefault();
    // pega as informacoes do form
    const nameForm = document.getElementById("name").value;
    const emailForm = document.getElementById("email").value;
    const phoneForm = document.getElementById("phone").value;
    
    const newContact = {
        name: nameForm,
        email: emailForm,
        phone: phoneForm,
    }

    if ((contacts.some((contact) => contact.email === newContact.email)) || contacts.some((contact) => contact.phone === newContact.phone)) {
        return alert('Contact already exists');
    }

    contacts.push(newContact);
    addToTable();
    form.reset();
    return true; 
};


const tableBody = document.getElementById("tableBody");
const addToTable = () => {
    // adiciona as informacoes que pegou do form e adiciona na tabela
    let line = "";
    for (const contact of contacts) {
        line += `<tr class="btn" value="noHighlight">
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button onclick="editContact('${contacts.indexOf(contact)}')">EDIT</button>
                <button onclick="removeContact('${contacts.indexOf(contact)}')">REMOVE</button>
                <button onclick="selectContact('${contacts.indexOf(contact)}')">SELECT</button>
            </td>
        </tr>`;
      }
      tableBody.innerHTML = line;
};


const editContact = (index) => {
    let newEmail = prompt("Insert new email");
    let newPhone = prompt("Insert new phone number");
    contacts[index].email = newEmail;
    contacts[index].phone = newPhone;
    addToTable();
}

const removeContact = (index) => {
    contacts.splice(index, 1);
    addToTable();
}

const selectContact = (index) => {
    linha = tableBody.rows[index];

    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.value === 'noHighlight'){
            btn.value = 'highlight';
            btn.class = 'highlight btn';
            addToTable()
        }
        else {
            btn.value = 'noHighlight';
            btn.class = 'noHighlight btn';
        }
    })
    
})
}


form.addEventListener("submit", getInfo);