// Your code goes here
function getClosestToZero(){
    let closestToZero = Math.abs(arguments[0]);
    let indexOfclosestToZero = 0;
    for(let i = 1; i <= arguments.length; i++){
        if (Math.abs(arguments[i]) < closestToZero) {
            closestToZero = Math.abs(arguments[i]);
            indexOfclosestToZero = i;
        }
    }
    return arguments[indexOfclosestToZero];
}