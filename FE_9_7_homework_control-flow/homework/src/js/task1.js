// Your code goes her
function myF() {
    let log = prompt('Enter your login', 'login');
    
    if (!log) {
        alert('Canceled');
    } else if (log.length < 4) {
        alert('I don\'t know any users having name length less than 4 symbols');
    } else if (log === 'user') {
        let password = prompt('Enter your password');
        if (password === 'SuperUser') {
            let t=new Date();
            t=t.getHours();       
            if (t < 20){
                alert('Good day!');
            } else {
                alert('Good evening!');
            }
            
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don\'t know you');
    }
    
}

myF();
