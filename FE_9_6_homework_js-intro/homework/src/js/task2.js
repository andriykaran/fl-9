// Your code goes here

function myF() {
    let output = '';
    let inputFirstSide = prompt('Enter first side');
    let inputSecondSide = prompt('Enter second side');
    let inputAngle = prompt('Enter angle between');
    const anglesSum=180;
    const k=0.5;
    
     function inputCheck(input){     
        if (!input.isNaN && input>0) {
            return true;                        
        } else {
            return false;            
        }        
    }        
    let a = parseFloat(inputFirstSide);
    let b = parseFloat(inputSecondSide);
    let α = parseFloat(inputAngle);
    let c = Math.sqrt(a*a + b*b - 2 * a * b * Math.cos(α/anglesSum*Math.PI));
        
    let p = a + b + c;    
    let s = k * a * b * Math.sin(α/anglesSum*Math.PI); 
    
    c = c.toFixed(2);
    s = s.toFixed(2);
    p = p.toFixed(2);    
        
    if (inputCheck(inputFirstSide) && inputCheck(inputSecondSide) && inputCheck(inputAngle) && inputAngle < anglesSum) {
        output = 'c length: ' + parseFloat(c) + '\n'
             + 'Triangle square: ' + parseFloat(s) + '\n'
             + 'Triangle perimeter: ' + parseFloat(p) + '\n';
    } else {         
         output = 'Invalid data';
    }
    console.log(output);
   
}
myF();