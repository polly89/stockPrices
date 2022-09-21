function best(price, n){
if (n == 1)
    return;

    let i = 0;
    while (i < n - 1){
        while ((i < n - 1) && (price[i + 1] <= price[i]))
        i++;
        if(i == n - 1)
            break;

            let buy = i++;
            while ((i < n) && (price[i] >= price[i - 1]))
            i++;
            let sell = i - 1;

            console.log(`Buy on day: ${buy}. Sell on day: ${sell} <br>`);
    }

}

let price = [100, 180, 260, 310, 40, 535, 695];
let n = price.length;

best(price, n);