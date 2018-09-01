/* Your code goes here */
const cartsMax = 3;
const numberOfCents = 2;

function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [];
    const tranferTax = 0.5,
          hundredPercent = 100;
     
    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key}
        },
        putCredits(amount) {
            balance = (balance + amount).toFixed(numberOfCents);
            historyLogs.push({
                operationType: 'Resived credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')})
        },
        
        takeCredits(amount) {
            balance = (balance - amount).toFixed(numberOfCents);
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')})
        },
        setTransactionLimit(amount) {
            transactionLimit = amount;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: new Date().toLocaleString('en-GB')})
        },
        transferCredits(amound, card) {
            if (amound > transactionLimit) {
                console.log('Transaction Limit exceeded. The transfer has not been completed')
            } else if (amound > balance) {
                console.log('transfer is not possible, not enough money')
            } else {
                this.takeCredits((amound * (1 + tranferTax / hundredPercent)).toFixed(numberOfCents));
                card.putCredits(amound);
            }
        }
    }
}

function UserAccount(name) {   
    this.name = name;
    this.cards = [];
    this.addCard = function() {
        if (this.cards.length < cartsMax) {
             this.cards.push(userCard(this.cards.length+1));
        } else {
            console.log(`No more then 3`);
        }
    }
    this.getCardByKey = function(key) {
        return this.cards[key - 1];
    }
}
