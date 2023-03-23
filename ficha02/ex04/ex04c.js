const isPalindrome = num => {
    const str = num.toString(); // convert number to string
    const reversed = str.split('').reverse().join(''); // reverse the string and join it
    if (str === reversed){
        return true;
    }
    else {
        return false
    }}


console.log(isPalindrome(12321));
console.log(isPalindrome(12345));
