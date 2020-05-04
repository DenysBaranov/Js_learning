'use strict';

/* 2.В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
·      Первая будет спрашивать "Ваш бюджет на месяц?"
·      Вторая "Введите дату в формате YYYY-MM-DD"*/

let money = +prompt("Ваш бюджет на месяц?", "");
let time = +prompt("Введите дату в формате YYYY-MM-DD", "");

/* 3.Создать объект appData, который будет содержать такие данные:
·      бюджет (передаем сюда переменную из п.2)
·      данные времени - timeData (передаем сюда переменную из п.2)
·      объект с обязательными расходами - expenses (смотри пункт 4)
       Hint: объект создается лишь пустыми скобками: expenses : {}
·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)
·      массив данных с доп. доходом - income (оставляем пока пустым)
       Hint: массив создается лишь пустыми квадратными скобками: income : []
·      свойство savings (выставляем его как false)*/

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1: 'answer2'
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

// 4.Задать пользователю по 2 раза вопросы:
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = +prompt("Во сколько обойдется?", "");
    answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    answer2 = +prompt("Во сколько обойдется?", "");

appData.expenses[answer1] = answer2;

// 5.Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)
alert("Бюджет на один день:" + appData.budget/30);

// Проверить, чтобы все работало без ошибок в консоли
console.log(money);
console.log(typeof(money)); 
console.log(time);
console.log(typeof(time)); 
console.log(appData);
console.log(typeof(answer1)); 
console.log(answer1);
console.log(typeof(answer2)); 
console.log(answer2);
console.log(typeof(alert));
console.log(alert);
console.log(appData.budget);
console.log(typeof(appData.budget));