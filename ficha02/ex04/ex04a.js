const checkLeapYear = function (year) {
    // checa se e um ano bissexto
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
};
  
const num = +prompt('Enter the year to check if it is a leap');
  
if (checkLeapYear(num)) {
    alert(`The year of ${num} is a leap year`);
} else {
    alert(`The year of ${num} is not a leap year`);
}