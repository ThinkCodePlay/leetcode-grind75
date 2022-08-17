// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minValue = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // check if we can find lower price to buy
    if (currentPrice < minValue) {
      minValue = currentPrice;
    }

    const profit = currentPrice - minValue;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
const res = maxProfit(prices);
console.log(res);
