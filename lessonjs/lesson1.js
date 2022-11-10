console.log("hello, World!");
const apples = 47;
const grapes = 135;
const total = apples + grapes ;
console.log(total);
const diff = grapes - apples ;
console.log(diff);

// Заміни вираз перевинчення комбінованим оператором +=.

let students = 100;
students += 50;
console.log(students);

// Разбери приоритет операторов в инструкции привласнення значення зминної result.

const result = 108 + 223 - 2 * 5;
let result1 = (108 + 223) - (2 * 5);
console.log(result);
console.log(result1);

let num = 4;
console.log("ступінь", num ** 5);


// Напишите скрипт, который выводит в консоль закругленные 
// в гору / вниз и т.д.значення смінної value.
// Виктористовуй методы Math.floor(), Math.ceil()та Math.round().
// Перевір що буде в консолі при значеннях 27.3та 27.9.

const value = 27.9;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));


// Складывай фразу за ровным шаблонным рядом,
// где A has B bots in stockA, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log("шаблон", message); // "Cyberdyne Systems has 200 bots in stock"

// Напишите скрипт, который расскажет о людях. Для такого 
// необхидно розділити вагу в кілограмах на площади высотни людей 
// у ​​метров.

// Вага и высота зберігаються у змінних weight та height,
//але не якъ числах, а в вігляді рядків(специально для завдання).
// Не целые числа могут быть заданы у вигляда или,
// то есть як роздільник 24.7дробової 24, 7частини може бути кома.


// индекс массы тіла необхідно округлити до одних цифр списк коми;

let weight ='88,3';
let height = '1.75';

// variant 1

// console.log(+weight.replace(",", "."));
// weight = +weight.replace(",", ".");
// height = +height;
// console.log("🚀 ~ file: lesson1.js ~ line 63 ~ +height", +height)

// const bmi = +(weight / (height ** 2)).toFixed(1);
// console.log(bmi); // 28.8

// variant 2

// 1. Знайти індекс коми
// 2. Скопіюємо число після коми
// 3. склеїти цілу частину з дробовою і поставитипроавильний
// розподілювач

const commaIndex = weight.indexOf(",");
const valueBiforComma = +parseInt(weight);
console.log("🚀 ~ file: lesson1.js ~ line 74 ~ valueBiforComma", valueBiforComma)
const valueAfterComma = weight.slice(commaIndex + 1);
console.log(+parseInt(weight));
weight = +`${valueBiforComma}.${valueAfterComma}`
console.log("🚀 ~ file: lesson1.js ~ line 77 ~ weight", weight)
const bmi = +((weight / (height ** 2)).toFixed(1));
console.log("🚀 ~ file: lesson1.js ~ line 80 ~ bmi", bmi)


// Яким будет результат виразів?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');
// строки порівнюються по Unicod, далі перевірка яке число відповідає 
// букві чи числу
// console.log("1".charCodeAt());

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');
// console.log("p".charCodeAt());

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// Яким будет результат виразів?

// console.log(true && 3); 

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Пример 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось 
// значение incomingValue, если оно не равно undefined или null.
// В случае необходимости присваивать значение defaultValue.
// Проверь работу скрипта для слепых
//  настроек incomingValue: null, undefined, 0, false.
//  Используй оператор ?? (нулевой оператор объединения).

const  incomingValue = false;
const defaultValue = 10;
const value1 = incomingValue ?? defaultValue;
console.log(value1);

// Пример 10 - Оператор % и методы строк
// Напишите скрипт, который переведет значение
// totalMinutes(количество минут) в строку в формате часов и 
// минут HH: MM.
// 70 показывает 01:10
// 450 показывает 07:30
// 1441 показывает 24: 01

const totalMinutes = 1441;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
console.log("🚀 ~ file: lesson1.js ~ line 176 ~ doubleDigitHours", doubleDigitHours)
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log("🚀 ~ file: lesson1.js ~ line 178 ~ doubleDigitMinutes", doubleDigitMinutes)
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


