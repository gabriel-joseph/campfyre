/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let lowestPriceThusFar = Infinity;
  let highestPriceThusFar = 0;
  let lowestIndex = 0;

  prices.forEach((price, index) => {
    let smallest = false;
    if (price < lowestPriceThusFar) {
      lowestPriceThusFar = price;
      lowestIndex = index;
      smallest = true;
    }

    if (
      !smallest &&
      index > lowestIndex &&
      price > lowestPriceThusFar &&
      price > highestPriceThusFar
    ) {
      highestPriceThusFar = price;
    }
  });

  let profit = highestPriceThusFar - lowestPriceThusFar;
  if (profit > 0) {
    return profit;
  }
  return 0;
}
