// Your code goes her
//Task 1
function findType(parameter) {
    return typeof parameter;
}
//Task 2
function forEach(ar, fun) {
    for (let i = 0; i < ar.length; i++) {
        fun(ar[i]);
        }
}
//Task 3
function map(ar, func) {
    let tar=[];
    forEach(ar, function(el) {
        tar.push(func(el));
    });
    return tar;
}
//Task 4
function filter(array, filterParameter){
    let filteredArray = [];
    forEach(array, function(el) {
        if (filterParameter(el)) {
            filteredArray.push(el);
        }
    })
    return filteredArray;
}
//Task 5
function getAdultAppleLovers(data){
   return map(filter(data, el => el.age >= 18 && el.favoriteFruit === 'apple'), el => el.name);
}
//Task 6
function keys (obj) {
    let keyArray = [];
    for (let keyName in obj) {
        if (keyName) {
            keyArray = keyArray.push([keyName]);
        }
    } 
    return keyArray;    
}
//Task 7
function values (obj){
    let valuesArray = [];
    for (let keyName in obj) {
        if (keyName) {
            valuesArray = valuesArray.push(obj[keyName]);
        }
    } 
    return valuesArray;    
}
//Task 8
function showFormattedDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `It is ${date.getDate()} of ${months[date.getUTCMonth()]}, ${date.getFullYear()}`;
}