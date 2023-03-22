const isPalindrome = num => {
    const str = num.toString(); // convert number to string
    const reversed = str.split('').reverse().join(''); // reverse the string and join it
    return str === reversed; // compare the original and reversed string
};


console.log(isPalindrome(12321)); // true
console.log(isPalindrome(12345)); // false

  