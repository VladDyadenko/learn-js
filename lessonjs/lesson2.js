// const question = prompt("Яка офіційна назва JavaScript?");
// const answer = "ESMAScript";

// if (question.toLowerCase() === answer.toLowerCase()) {
//     alert("Правильно!")
// } else {
//     alert("Не знаєте? ECMAScript")
// };

// -------------- 2--------------

// Напишите сценарий для отображения часов и минут в консоли в
//  виде строки размеров "14 ч. 26 мин.".Если значение
//  minutesравнозначно 0, то вывести документ "14 ч."без минуты.

// const hours = 20;
// const minutes = 10;

// let message = "";

// if (minutes === 0) {
//     message = `${hours} г.`;
// } else {
//     message = `${hours} г. ${minutes} хв.`
// };
// console.log(message);

// ------------------ 3-------------

// Пример 3 - Розгалуження
// Напишите скрипт, который выводит в консольный ряд
// "Це позитивне число", как и в приглашении, вводите число больше
// нуля.
// Якщо було введено нуль, выводь в консоль рядок "Це нуль".
// Якщо передали від'ємне число, у консолі повинен бути рядок
// "Це негативне число".

// const userInput = +prompt('Введіть число');
// console.log(userInput);

// if (userInput > 0) {
//     alert("Це позитивне число");
// } else if (userInput === 0) {
//     alert("Це нуль");
// } else if (userInput < 0) {
//     alert("Це негативне число");
// } else {
//     alert ("Це не число");
// }

// ---------------------- 4 -------------------

// Пример 4 - Вложенные ветвления
// Напишите скрипт, который сравнивает числа в присутствии a и b.
// Если оба значения больше 100, то выведи в консоли больше из них.
// В данном случае в консоли должны быть значения bи числа 512.

// const a = 120;
// const b = 200;

// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b));
//     // if (a > b) {
//     //     console.log(a);
//     // } else {
//     //     console.log(b);
//     // }
// } else {
//     console.log(b + 512);
// };



// Напиши цикл для которого выводится в консоль браузера числа по
//  возрасту от min до max, но только если число кратное 5.

const max = 100;
const min = 20;

for (let i = min; i <= max; i += 5) {
    if (i % 5 === 0); console.log(i);
}

const userName = +(prompt("Введите число"));
















// Пример 1 - Ввод пользователя и ветвления
// укажите случай if..else и подсказку, напишите код,
// который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай алерт со строкой
// "Верно!", в случае - "Не знаете? ECMAScript!"

// Создайте переменные str1 = 'Привет, ' и str2 = 'Мир!'.
//  С помощью этих переменных и операции сложения строк выведите
//   на экран фразу 'Привет, Мир!'.
// str1 = "Hello";
// str2 = "World!";
// str3 = str1 + " " + str2;
// console.log("🚀 ~ file: lesson2.js ~ line 13 ~ str3", str3)

// Создайте переменную name и присвойте ей ваше имя.
// Выведите на экран фразу 'Привет, %Имя%!'.
// const nameUser = "Vladymyr";
// const printToWindow = `Hello, ${nameUser}!`;
// console.log(`Hello, ${nameUser}!`);

// Создайте переменную age и присвойте ей ваш возраст.
// Выведите на экран 'Мне %Возраст% лет!'.
// const age = 47;
// console.log(`I am ${age} year old!`);

//  Спросите имя пользователя с помощью методa prompt.
//  Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// const nameUser = prompt("What's you name?")
// alert(`You are name ${nameUser}`);

//  Спросите у пользователя число.Выведите с помощью alert
//  квадрат этого числа.
// const anyNumber = prompt("Wright any Number");
// alert(anyNumber ** 2);

// Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки
// выведите на экран символ 'a', символ 'c', символ 'e'.
// const str = "abcde";
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

// Создайте переменную num и присвойте ей значение '12345'.
// Найдите произведение(умножение) цифр этого числа.
// let num = "12345";
// num = num[0] * num[1] * num[2] * num[3] * num[4];
// console.log(num);

// ----------- Цикл do...while -------------

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// --------------------------------Цикл for---------
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// ---------------------------------

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 1) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// -------------------------
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }

// -------------------- Цикл while ----------------
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// --------------------
// let a = 3;
// a--
// console.log("🚀 ~ file: lesson2.js ~ line 103 ~ a", a)
// let b = 6;
// b--
// console.log("🚀 ~ file: lesson2.js ~ line 105 ~ b", b)

// ----------------Оператор break-------------

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);
    
//   if (i === 6) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// ------------
// for (let i = 0; i <=10 ; i += 1) {
//     console.log(i);
// }


// -----------------расчет зарплаты сотрудников Задачка Репета
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП сотрудника номер ${i} = ${salary} `);
//     totalSalary += salary;
  
// }
//  console.log(`totalSalary: `, totalSalary);



// ------------- Задачка Репета
// Напиши скрипт который подсчитывает сумму всех четных числе
// которые входят в диапазон чисел в переменных от min до max.

// const min = 5;
// const max = 15;
// let total = 0;

// for (i = min; i <= max; i += 1) {
//     console.log(i);
    
//     if (i % 2 === 0) {
//         console.log(`четное число: `, i);
//         total += i;
//     }
       
// }
// console.log(`Сумма четных чисел: `, total);



// ------------ то же с continue
// const min = 0;
// const max = 5;
// let total = 0;

// for (i = min; i <= max; i += 1) {
//     console.log(i);
    
//     if (i % 2 !== 0) {
//         console.log(`не четное: `, i);
//         continue;
//     }
//     console.log(`четное число: `, i);
//     total += i;
// }
// console.log(`Сумма четных чисел: `, total);



// ----------------- Задача Репеты -----------------
// покупка в магазине
// let balans = 10000;
// const payment = 9999;

// console.log(`общая стоимость заказа ${payment} кредитов. Проверяем доступноек количество кредитов на счету`);

// if (balans >= payment) {
//     console.log("ok");
//     balans -= payment;
//     console.log(`Остаток кредитов на счету `, balans);
// } else {
//     console.log("На счету недостаточно кредитов!")
// }
// console.log("Операция завершена");

// ---------------- Задача Репети ----------
// let totalSpant = 1500;
// let paymant = 500;
// let discount = 0;
// let totalDiscount = 0;

// if (totalSpant >= 100 && totalSpant <= 1000) {
//     discount = 0.02;
//     totalDiscount = paymant * discount;
// } else if (totalSpant > 1000 && totalSpant <= 1500) {
//     discount = 0.05;
//     totalDiscount = paymant * discount;
   
// } else if (totalSpant > 1500) {
//     discount = 0.1;
//     totalDiscount = paymant * discount;
    
// } else { };

// totalSpant += paymant;

// console.log(`Ваша скидка при покупке на сумму ${paymant} составит ${discount * 100}%`);
// console.log("Ваша скидка: ", totalDiscount, "грн.");
// console.log(`К уплате ${paymant-paymant*discount}`)
// console.log(`Сумма всех ваших покупок составит ${totalSpant} грн.`)

// ---------------------
// Напиши скрипт, который выводится в консольной
// "Это положительное число"строке, если в приглашении пользователя
//  вводится число больше нуля.Если был введен ноль,
// выводи в консольную строку "Это ноль".Если передали отрицательное
// число, в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// let a;
// if (userInput > 0) {
//     a = ("Это положительное число");
// }
// if (userInput == 0) {
//     a = ("Это ноль");
// }
// if (userInput < 0) {
//     a =("Это отрицательное число");
// }

// console.log(a);

// Пример 4 - Вложенные ветвления
// Напишите скрипт, который сравнивает числа в присутствии a и b. 
// Если оба значения больше 100, то выведи в консоли больше из них.
// В данном случае в консоли должны быть значения b и числа 512.

// const a = 80;
// const b = 90;

// let value = 0;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         value = a;
//     }
//     else {
//         value = b;
//     } 
    
// } else {
//     console.log("Числа меньше 100");
// }
// console.log(value);

// ----------------------------------
// Пример 5 - Форматирование ссылок (endsWith)
// Напиши скрипт, который заканчивается ли значением устанавливает 
// link символ /.Если нет, добавьте в конец значения этого linkсимвола.
// Используй свет if...else.

