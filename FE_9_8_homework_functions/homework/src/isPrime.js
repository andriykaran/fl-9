// Your code goes here
function isPrime(number){
    const firstPrimeNumber = 2
    if (Number.isInteger(number) && number > 0) {   
        for (let i = firstPrimeNumber; i < number; i++){
            if (number%i === 0){
                return false;                
            }
        }
        return number !== 1;
      }
}

