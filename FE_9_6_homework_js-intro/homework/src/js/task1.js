// Your code goes here
function myF() {
    let output = '';
    let inputPrise = prompt('Enter amount of money');
    let price = parseFloat(inputPrise);
    let inputDiscout = prompt('Enter discount');
    let discount = parseFloat(inputDiscout);
    
    function inputCheck(input){     
        if (!input.isNaN && input>=0) {
            return true;                        
        } else {
            return false;            
        }        
    }    
    price = price.toFixed(2);
    discount = discount.toFixed(2);
    
    let newPrise = (price * (100 - discount) / 100).toFixed(2);
    let save = (price * discount / 100).toFixed(2);
    
    if (inputCheck(inputPrise) && inputCheck(inputDiscout) && inputDiscout < 100 && inputPrise !== 0) {
        output = 'Price without discount: ' + parseFloat(price) + '\n'
             + 'Discount: ' + parseFloat(discount) + '%'+'\n'
             + 'Price with discount: ' + parseFloat(newPrise) + '\n'
             + 'Saved:  ' + parseFloat(save);
    } else {         
         output = 'Invalid data';
    }
    console.log(output);
   
}
myF();