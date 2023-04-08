const student = {
    name: "John Doe",
    course: "POO",
    grade: 12
}


// ex a ------------------------------
function objProperties(obj) {
    for (const key in obj) {
        console.log(key);
}}

const properties = objProperties(student);
console.log(properties);



// ex b ------------------------------
function deleteProperty(obj, property){
    console.log(obj);
    for (const key in obj) {
        if (key == property){
            delete obj[key];
        };
    };
    console.log(obj);
}
const del = deleteProperty(student, "grade");



// ex c ------------------------------
function countProperties(obj) {
    let count = 0;
    for (const key in obj) {
        count += 1;
    }
    console.log(count)
    // or console.log(Object.keys(obj).length)
}

const count = countProperties(student);
console.log(count);
