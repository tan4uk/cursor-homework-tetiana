let apples = 15.678;
let oranges = 123.965;
let lemons = 90.2345;

let maxPrice = Math.max(apples, oranges, lemons);
console.log(maxPrice);

let minPrice = Math.min(apples,oranges, lemons);
console.log(minPrice);

let sum = apples + oranges + lemons;
console.log(sum);

let roundedSum = Math.floor(apples) + Math.floor(oranges) + Math.floor(lemons);
console.log(roundedSum);

let sum2 = Math.ceil(sum/100)*100;
console.log(sum2);

if (roundedSum%2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

let change = 500 - sum;
console.log(change);

let averagePrice = (sum/3).toFixed(2);
console.log(averagePrice);

let randomDiscount = Math.floor(Math.random()*51);
console.log(`Current discount: ${randomDiscount} %`);

let clientPrice = (sum - sum * randomDiscount / 100).toFixed(2);
console.log(`Price for client: ${clientPrice}`);

let totalCost = Math.floor(sum/2);

let lostProfit = totalCost - Math.trunc(sum * randomDiscount / 100);
console.log(`Current lost profit is: ${lostProfit}`);


console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sum}
Сума цілих частин вартості товарів: ${roundedSum}
Вартість всіх товарів, округлена до сотень: ${sum2}
Сума здачі, при оплаті всіх товарів, якщо клієнт заплатив 500 грн: ${change}
Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}

Знижка: ${randomDiscount} %
Ціна зі знижкою для клієнта: ${clientPrice}
Втрачена вигода: ${lostProfit}`);



