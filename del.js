function maxProfit(k, prices) {
    
    console.log("k, pricess -> ", k, prices);
    let n = prices.length;
    
    if (k === 0 || n < 2) return 0; //Edge
    
    //Case I
    if (k >= n) { //Problem becomes Buy and Sell Stock II
        let res = 0;
        for (let i = 0; i < n; i++) {
            if (prices[i] < prices[i + 1]) res += (prices[i + 1] - prices[i]);
        }
        console.log("if res -> ", res);

        return res;
    }
    
    //Case II: Normal
    let buy = new Array(k + 1).fill(-Infinity);
    let sell = new Array(k + 1).fill(0);

    console.log("start buy -> ", buy);
    console.log("start sell -> ", sell + "\n");
    
    buy[0] = -prices[0]; //Investment on first day

    console.log("after buy, ", buy)

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]); //Hold or Max Sell Profit of previous day - current price
            sell[j] = Math.max(sell[j], buy[j] + prices[i]);
            console.log(`i -> ${i}, j -> ${j}, buy[${j}] -> ${buy[j]}, sell[${j}] -> ${sell[j]}`)
        }
    }
   
    console.log("end buy", buy)
    console.log("end sell", sell)
    return sell[k];
}
let k = 1;

  let prices  = [1,4] //2
//   let prices  = [3,2,6,5,0,3] //7
//   let prices = [20, 40, 10] //20

// let prices = [30, 20, 60, 50, 10, 30, 10, 110]; //60


  let res = maxProfit(k, prices);

  console.log("res -> ", res);