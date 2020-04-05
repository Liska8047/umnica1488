'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}


let money,
  addExpenses = prompt('Введите дополнительную статью расходов через запятую', ' Мяско, сок '),
  income = 'Нет дополнительного дохода',
  mission = 15000,
  deposit = confirm('Есть ли у вас депозит в банке?');


  let start = function() {

    while (!isNumber(money)){
        money = prompt('Ваш месячный доход?');
    }

};

start();

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(mission);     


let expenses = [];

let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++){

            expenses[i] = prompt('Введите обязательную статью расходов', 'Услуги ЖКХ');
     
        sum += +prompt(' Во сколько это обойдется?');
    }
    
    while (!isNumber(sum)){
        sum += +prompt(' Во сколько это обойдется?');
    }

    console.log(expenses);
    return sum;
};



let expensesAmount = getExpensesMonth();
console.log ('Расходы за месяц ' + expensesAmount); 

function getAccumulatedMonth(){
    return money - expensesAmount;
}
console.log('Накопления за месяц:', getAccumulatedMonth(money, expensesAmount));


let accummulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log('Накопления за месяц 2:', accummulatedMonth);


function getTargetMonth(){
    let a = Math.floor(mission / accummulatedMonth);
        if(a < 0){
            return console.log('Цель не будет достигнута. ');
        }
        else{
            return console.log('Цель будет достигнута за :' + a + ' месяцев');
        }
};
getTargetMonth();

let budgetDay = accummulatedMonth / 30;
console.log('Ежедневный бюджет:', budgetDay);

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