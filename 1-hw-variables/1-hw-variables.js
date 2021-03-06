const apples = 15.678;
const oranges = 123.965;
const lemons = 90.2345;

const maxPrice = Math.max(apples, oranges, lemons);
console.log(maxPrice);

const minPrice = Math.min(apples,oranges, lemons);
console.log(minPrice);

const sum = apples + oranges + lemons;
console.log(sum);

const roundedSum = Math.floor(apples) + Math.floor(oranges) + Math.floor(lemons);
console.log(roundedSum);

const sum2 = Math.ceil(sum/100)*100;
console.log(sum2);

const isEven = Math.floor(sum)%2 === 0;
console.log(isEven);

const clientPayment = 500;
const change = clientPayment - sum;
console.log(change);

const averagePrice = (sum/3).toFixed(2);
console.log(averagePrice);

const randomDiscount = Math.floor(Math.random()*51);
console.log(`Current discount: ${randomDiscount} %`);

const clientPrice = (sum - sum * randomDiscount / 100).toFixed(2);
console.log(`Price for client: ${clientPrice}`);

const totalCost = Math.floor(sum/2);

const lostProfit = totalCost - Math.trunc(sum * randomDiscount / 100);
console.log(`Current lost profit is: ${lostProfit}`);


console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${sum}
Сума цілих частин вартості товарів: ${roundedSum}
Вартість всіх товарів, округлена до сотень: ${sum2}
Чи є сума всіх товарів, округлена до меншого, парним числом? : ${isEven};
Сума здачі, при оплаті всіх товарів, якщо клієнт заплатив 500 грн: ${change}
Середнє значення цін, округлене до другого знаку після коми: ${averagePrice}

Знижка: ${randomDiscount} %
Ціна зі знижкою для клієнта: ${clientPrice}
Втрачена вигода: ${lostProfit}`);



