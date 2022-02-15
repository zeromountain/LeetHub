/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const len = prices.length;
    const minBuy = [prices[0], ...Array.from({length: len - 1}, () => 0)]; 
    const maxSell = [...Array.from({length: len - 1}, () => 0), prices[len - 1]];

    for (let i = 1; i < len; i++) {
        minBuy[i] = Math.min(prices[i], minBuy[i - 1]);
        maxSell[len - (i + 1)] = Math.max(prices[len - (i + 1)], maxSell[len - i]);
    }

    let profit = 0;
    for (let i = 0; i < len; i++) {
        profit = Math.max(profit, maxSell[i] - minBuy[i])
    }
    return profit;
};