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
 console.log ('Ваш месячный доход ' + money );

 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период');
 console.log('Расходы за рассчитываемый период ' + addExpenses);

 deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(deposit);

 let expenses1 = prompt('Введите обязательную статью расходов?');
 console.log('Обязательная статья расходов ' + expenses1);
 let amount1 = +prompt('Во сколько это обойдется?');
 console.log('Это обойдется в ' + amount1);

 let expenses2 = prompt('Введите обязательную статью расходов?');
 console.log('Обязательная статья расходов ' + expenses2);
 let amount2 = +prompt('Во сколько это обойдется?');
 console.log('Это обойдется в ' + amount2);

 let allAmount =(parseInt(amount1) + parseInt(amount2));


 let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(mission); 


    function getExpensesMonth(amount1, amount2){
        return amount1 + amount2;
    }
    console.log('Сумма всех обязательных расходов за месяц ', getExpensesMonth(amount1, amount2));
    
    function getAccumulatedMonth(money, allAmount){
        return money - allAmount;
    }
    console.log('Накопления за месяц ', getAccumulatedMonth(money, allAmount));

let accummulatedMonth = getAccumulatedMonth(money, allAmount);
console.log('Накопления за месяц ', accummulatedMonth);


function getTargetMonth(misson, accummulatedMonth){
    return Math.floor(misson / accummulatedMonth);
}
console.log('Цель будет достигнута за ', getTargetMonth(mission, accummulatedMonth));

let achieved = (mission / accummulatedMonth);
console.log('Цель будет достигнута за ' + Math.ceil(achieved) + ' месяц');

budgetDay = accummulatedMonth / 30;
 console.log('Бюджет на день ' + Math.floor(budgetDay));


 let getStatusIncome = function() {
    if(budgetDay > 1200){
        return('У вас высокий уровень дохода :)');
    }
    else if(600<=budgetDay){
        return('У вас средний уровень дохода :|');
    }
    else if(0<=budgetDay){
        return('К сожалению, ваш уровень дохода ниже среднего :(');
    }
    else{
        return('что-то пошло не так');
    }
    };
    
    console.log(getStatusIncome());














































 


