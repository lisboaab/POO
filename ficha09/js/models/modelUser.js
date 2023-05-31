let usersList = [];

class Users {
    username = "";
    password = "";

    constructor (username,password){
        this.username = username;
        this.password = password;
    }
}

// Load users in local storage
export function init() {
    usersList = localStorage.usersList ? JSON.parse(localStorage.usersList) : [];
}

// Add new user
export function newUser(username,password){
    if (usersList.some(user => user.username === username)){
        throw Error("User already exists");
    }
    else {
        let newUser = new Users (username, password);
        usersList.push(newUser);
        localStorage.setItem("usersList", JSON.stringify(usersList));
    }
}

// Log in
export function login(username, password) {
    const user = usersList.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      return true;
    } else {
        console.log("login inválido")
        throw Error("Invalid login!");
    }
}

// Log out
export function logout() {
    sessionStorage.removeItem("loggedUser");
}

// Checks if user is logged
export function isLogged() {
    
    if (sessionStorage.getItem("loggedUser")){
        console.log("checkanswer true")
        return true
    } else {
        console.log("checkanswer false")
        return false;
    }
}

// Returns logged user
export function getUserLogged() {
    return JSON.parse(sessionStorage.getItem("loggedUser"));
}
