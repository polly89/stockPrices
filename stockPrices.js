function best(stocks){
    let largestDiff = 0;
    let smallestNumSeen = stocks[0];

    for(let i = 1; i < stocks.length; i++){
        const currentPrice = stocks[i];
        const currentDiff = currentPrice - smallestNumSeen;
        if(currentPrice < smallestNumSeen){
            smallestNumSeen = currentPrice;
        }else if(currentDiff >largestDiff){
            largestDiff = currentDiff;
        }
    }
    return largestDiff
}

test = [100, 180, 260, 310, 40, 535, 695]
console.log(best(test))
