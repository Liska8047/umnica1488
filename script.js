let money = 50000;
let income = "фриланс";
let addExpenses = "Такси, свет, газ";
let deposit = false;
let mission = 10000;
let period = 5;

alert ("я точно дебил");

console.log ("или не дебил");

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));


console.log(addExpenses.length);

console.log("Период равен " + period +  " месяцев");

console.log("Цель заработать " + mission +  " рублей");

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split( ", "));

 let budgetDay = money / 30;
 console.log(budgetDay);

 money = prompt('Ваш месячный доход?');
 console.log (money);

 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 console.log(addExpenses);

 deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(deposit);

 let expenses1 = prompt('Введите обязательную статью расходов?');
 console.log(expenses1);
 let amount1 = +prompt('Во сколько это обойдется?');
 console.log(amount1);

 let expenses2 = prompt('Введите обязательную статью расходов?');
 console.log(expenses2);
 let amount2 = +prompt('Во сколько это обойдется?');
 console.log(amount2);

 let budgetMounth;
budgetMounth = (money - amount1 - amount2);
console.log(budgetMounth);

let achieved = (mission / budgetMounth);
console.log(Math.ceil(achieved));

budgetDay = budgetMounth / 30;
 console.log(Math.floor(budgetDay));


 if(budgetDay > 1200){
    console.log('У вас высокий уровень дохода :)');
}
else if(600<=budgetDay){
    console.log('У вас средний уровень дохода :|');
}
else if(0<=budgetDay){
    console.log('Ваш уровень дохода ниже среднего :(');
}
else{
    console.log('Что-то пошло не так');}