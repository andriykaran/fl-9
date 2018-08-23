// Your code goes here
function reverseNumber(integer) {
    let stringInteger = integer.toString();
    let arrayStringInteger = stringInteger.split('');
    if (integer >= 0) {
        return parseInt(arrayStringInteger.reverse().join(''));
    } else {
        return -parseInt(arrayStringInteger.reverse().join(''));
    }
}