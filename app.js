'use strict'

const data =  [13, 1, 3, 4, 10, 2, 1];
const DAYS_Of_WEEK = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday',
}

function profit(pricesPerWeek) {
  //we start looking max profit for every day
  let maxProfit = 0;
  //set current bought price as first day price
  let currentPrice = pricesPerWeek[0];
  let bestDayToBuy = 1;
  let bestDaytoSell = 0;
  let lastPriceDay = 0;

  for (let i = 0; i < pricesPerWeek.length; i++) {
    //at every iteration finds the least price and check when it was
    if (pricesPerWeek[i] < currentPrice) {
      currentPrice = pricesPerWeek[i];
      lastPriceDay = i;
    }
    //control that we don't get min price after we found max profit day
    if ((pricesPerWeek[i] - currentPrice) > maxProfit) {
      maxProfit = pricesPerWeek[i] - currentPrice;
      bestDayToBuy = lastPriceDay;
      bestDaytoSell = i;
    }
  }

  return `Best day to buy is ${DAYS_Of_WEEK[bestDayToBuy]}
Best day to sell is ${DAYS_Of_WEEK[bestDaytoSell]}`;
}

console.log(profit(data)); 
//Best day to buy is Tuesday
//Best day to sell is Friday