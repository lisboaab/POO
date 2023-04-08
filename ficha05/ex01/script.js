const user = {
    name: "John",
    surname: "Smith",
}
console.table(user);

user.name = "Peter";
console.table(user);

delete user.name;
console.table(user);