// Your code goes here
function myGame() {
    const guessNumber = 3;
    const topNumberIncrement = 2;
    const topPrizeIncrement = 3;
    const one = 1;
    const startTopNumber = 5;
    const startMaxPrize = 10;
    let game = confirm('Do you want to play a game?');
    if (!game) {
            alert('You did not become a millionaire, but can.');
    }
    let totalPrize, topNumber, maxPrize;
    let newGame = true; 
    while (game) {
        if (newGame) {
            totalPrize = 0;
            topNumber = startTopNumber;
            maxPrize = startMaxPrize;
            newGame = false;
        }
        let num = Math.floor(Math.random() * topNumber);
            console.log(num); 
        let prizeDivider = 1;
        let win = false;
        for (let i = 1; i <= guessNumber; i++){
            let prize = parseInt(maxPrize / prizeDivider);
            let guess = parseInt(
                            prompt('Enter a number from 0 to ' + topNumber + '\n'
                                    + 'Attempts left: ' + (guessNumber - i + one) + '\n'
                                    + 'Total prize: ' + totalPrize + '$' + '\n'
                                    + 'Possible prize on current arrempt: ' + prize + '$'));
            if (num === guess) {
                totalPrize = totalPrize + prize;
                win = true;
                if (!confirm('Congratulation!   Your prize is:' + prize + '$. Do you want to continue?')) {
                     alert('Thank you for a game. Your prize is: ' + totalPrize + '$');
                    newGame = confirm('Do you want to play again?');
                    if (!newGame) {
                        game = false;
                    }
                }
                break;
            } else {
                prizeDivider = prizeDivider * 2;
            }            
        }
    
        if (!win) {
            totalPrize = 0;
            alert('Thank you for a game. Your prize is: ' + totalPrize + '$');
            newGame = confirm('Do you want to play again?');
            if (!newGame) { 
                break;
            }
        }
        maxPrize = maxPrize * topPrizeIncrement;
        topNumber = topNumber * topNumberIncrement;
    }   
}
myGame();