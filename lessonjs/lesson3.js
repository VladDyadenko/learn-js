// const arr = [1, 2, , 4, , 6];
// // console.log(arr)
// arr[2] = undefined;
// arr[4] = undefined;
// console.log(arr)

// const indexOfEmptyElements = [];

// for (let i = 0; i < arr.length; i +=1) {

//   if (typeof arr[i] === "undefined") {
    
//     indexOfEmptyElements.push(i);

//   }
  
// }
// console.log(indexOfEmptyElements);

// ------------------







// Напиши функцію getExtremeElements(array), яка приймає один
// параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і
// останнього елемента параметра array.
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// // повертає[1, 5]
// function getExtremeElements(array) {
//   // Change code below this line
//     return console.log([(array[0]), (array[array.length - 1])]);
    
//   // Change code above this line
// }

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
    
//  const countWord = console.log((+(message.split(" ")).length)*pricePerWord);
//     return countWord;


//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = console.log(array.join(delimiter));


//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// function slugify(title) {
//   // Change code below this line
    
//     const caseTitle = title.toLowerCase().replaceAll(" ", "-");
    
//     console.log(caseTitle);
//     // console.log(slugTitle);
    
    

   

//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("How to become a JUNIOR developer in TWO WEEKS");


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2) ;
// console.log("🚀 ~ file: lesson3.js ~ line 65 ~ firstTwoEls", firstTwoEls)
// const nonExtremeEls = fruits.slice(1, fruits.length-1) ;
// console.log(nonExtremeEls)
// const lastThreeEls = fruits.slice(-3) ;
// console.log("🚀 ~ file: lesson3.js ~ line 69 ~ lastThreeEls", lastThreeEls)
// ---------------------- 16/32 ------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let lengthArray = firstArray.length + secondArray.length;
//     console.log(lengthArray);

//     if (lengthArray <= maxLength) {
//         let allArray = firstArray.concat(secondArray);
//         console.log(allArray);
//         return allArray;
        
//     } else {
//         allArray = firstArray.concat(secondArray);
//         let maxAllArray = allArray.slice(0, maxLength);
//         console.log(maxAllArray);
//         return maxAllArray;
        
//     }
//     // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// ------------------------ 17/32------------------------------
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні
//  від start до end включно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end ; i += 1 ) { // Change this line
//   console.log(i);
// }

// ---------------------18/32 ---------------------
// Напиши функцію calculateTotal(number), яка приймає ціле число
// (параметр number) і повертає суму всіх цілих чисел від одиниці
// і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це
// 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//  // Change code below this line
//     let result = 0;
//     for (let i = 1; i <= number; i +=1) {
//         result += i;

//     }
//     console.log(result);
     
//   // Change code above this line
// }
// calculateTotal(7);

// ----------------- 19/32 --------------------
// Доповни код циклу for таким чином, щоб він послідовно логував
// усі елементи масиву fruits.
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// --------------------- 20/32 -----------------------------
// Напиши функцію calculateTotalPrice(order), яка приймає один
// параметр order - масив чисел, і обчислює загальну суму його
// елементів.Загальна сума елементів повинна зберігатися у змінній total,
//     яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
        
//     }
//     console.log(total);
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// ---------------------21/32 ------------------------
// Напиши функцію findLongestWord(string), яка приймає довільний рядок,
// що складається тільки зі слів, розділених
// пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   // Change code below this line

//     return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
    
//       // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord(''));

// ---------------------- 22/32 -----------------------
// Доповни код функції createArrayOfNumbers(min, max) таким чином,
// щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
   

//   const numbers = [];
//   // Change code below this line
//     for (i = min; i <= max; i += 1) {
//          numbers.push(i);
           
//     }

//   // Change code above this line
//     console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(1, 4);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

// ---------------------- 23/32 --------------------
// Напиши функцію filterArray(numbers, value),
// яка приймає масив чисел(параметр numbers) і повертає новий масив,
// в якому будуть тільки ті елементи масиву numbers, які
//  більші за значення параметра value(число).

// function filterArray(numbers, value) {
//    // Change code below this line
//     let result = [] ;

//     for (let i = 0; i < numbers.length; i += 1) {
                
//         if (numbers[i] > value) {
//             result.push(numbers[i]);
            
//         }
       
//     }
//     console.log(result);
//     return result;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray();

// ------------------ 24/32 -----------------
// Функція checkFruit(fruit) приймає рядок з назвою фрукта
//     (параметр fruit), і перевіряє, чи присутній такий фрукт в
//     масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");

// ------------------------ 25/32 -----------------
// Спільними елементами масивів називають ті елементи,
// які присутні у всіх масивах.
// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні в обох
//  вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.
//  Напиши функцію getCommonElements(array1, array2),
// яка отримує два масиви довільної довжини в параметри array1 і
// array2, і повертає новий масив, що складається з тих елементів,
// які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let lengthArray1 = array1.length;
//     let lengthArray2 = array2.length;
//     let result =[];
    
//     if (lengthArray1 < lengthArray2) {

//         for (let i = 0; i < lengthArray1; i += 1) {
//             let a = array1[i];
//             let b = array2.includes(array1[i]);
//             if (b === true) {
//                 result.push(array1[i]);
//             }
            
//         }
        

//     } else {
//         for (let i = 0; i < lengthArray2; i += 1) {
//             let a = array2[i];
//             let b = array1.includes(array2[i]);
//             if (b === true) {
//                 result.push(array2[i]);
//             }
            
//         }
        
//     }
    
//     console.log(result);
//     return result;


//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ---------------------26/32 ----------------------
// Виконай рефакторинг коду функції calculateTotalPrice(order),
//     замінивши цикл for на for...of.


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//  for (const argument of order) {
//     total += argument;
//   }
//   console.log(total)
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// --------------------------27/32------------------
// Виконай рефакторинг функції filterArray(numbers, value),
//     замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const argument of numbers) {
//     const number = argument;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//     console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);

// --------------------29/32--------------
// Напиши функцію getEvenNumbers(start, end),
//     яка повертає масив усіх парних чисел від start до end.
//     Парним вважається число, яке ділиться на 2 без
// остачі(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let result = [];

//     for (let i = start; i <= end; i += 1){

//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     console.log(result);
//     return result;


//     // Change code above this line
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// ----------------- 30/32 ---------------
// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення
//  усіх ітерацій циклу
// Доповни код таким чином, щоб у змінну number записувалося
// перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
      
//   }
// }

// ------------------------ 31/32 ---------------------

// function findNumber(start, end, divisor) {
//   // Change code below this line
// //   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//         console.log(i);
//         return i;
//     }
//   }
    
  
//   // Change code above this line
// }
// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// ---------------------- 32/32 ----------------------
// Напиши функцію includes(array, value), яка робить те саме,
//     що і метод масиву масив.includes(значення) - перевіряє,
//     чи присутнє в масиві array значення value, повертаючи true,
//         якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes()
//  не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
//     let result;

//     for (let i = 0; i < array.length; i += 1) {
//       result = (value === array[i]);

//       if (result === true) {
//         console.log(result)
//         return result;
//       }
//     }
//     console.log(result)
//     return result;
       
//   // Change code above this line
   
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");

// Пример 1 - Базовые операции с массивом
// представление с массивом genres значений «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Введите в консоль первый элемент массива.
// Вы вводите в консоль последний массивный элемент.
// Код должен работать для массивной добычи.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Кантри» и «Регги» в начало массива.

// const genres = [];
// console.log(genres);

// genres[0] = "Джаз";
// genres[1] = "Блюз";
// genres[genres.length] = "Рок-н-ролл";

// console.log(genres);
// console.log(genres[genres.length-1]);
// console.log(genres.splice(0, 1));
// console.log(genres.splice(0, 0, "Кантри", "Регги"));
// console.log(genres);

// Пример 2 - Массивы и строки
// Напиши рецепт для определения площади опухоли со значениями,
//   которые имеют значение values в виде строк.Значения
//  гарантированно разделены пробелом.

// const values = '8 11';
// const stringValies = values.split(" ");
// const square = stringValies[0] * stringValies[1];

// console.log(square);

// Пример 3 - Перебор массива
// Напишите скрипт для перебора циклического fruits массива for.
// Для каждого элемента массива выведите в консоль строку в формате
// номер_элемента: значение_элемента.Нумерация элементов начинается
//  с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i +=1) {
//   console.log(`${i+1}: ${fruits[i]}`);
// }


// Пример 4 - Массивы и циклы
// Напишите скрипт, который выводит в консоль имя и телефонный
//  номер пользователя.В основном names и phones часто встречаются
//  имена и телефонные номера, разделенные запятыми. Порядковый
//  номер имен и телефонов в порядке поступления.
//  Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis, Ivan';
// const phones = '89001234567,89001112233,890055566377,890055566300, 8900562522';

// const bookNames = names.split(",");
// console.log(bookNames);
// const bookPhons = phones.split(",");
// console.log(bookPhons);

// for (let i = 0; i < bookNames.length; i += 1) {
//   let phonsBook = `${bookNames[i]}: ${bookPhons[i]}`;
//   console.log(phonsBook)
// }

// Пример 5 - Массивы и строки
// Напишите скрипт, который выводит в консоли все слова первого,
// кроме последнего.Результирующая строка не должна начинаться
// или заканчиваться пробельным символом.Скрипт должен работать
// для любой строки.

// const string = 'Welcome to the future';

// for (let i = 0; i < string.split(" ").length-1; i += 1) {
//   console.log(string.split(" ")[i]);
// }

// Пример 6 - Массивы и строки
// Напишите скрипт, который «разбирает» строку
// (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// console.log((string.split(" ")).reverse().join(" "));

// Пример 7 - Сортировка массива с циклом
// Напишите шаблон массива сортировки строк
//  в алфавитном порядке по первому буквенному элементу.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort()
// console.log( langs.sort())

// Пример 8. Элемент поиска
// Напишите скрипт поиска самого малого числа в массиве.
//  Код должен работать для любого массива чисел.
//  Используй цикл для решения задачи.

// const numbers = [20, 17, 94, 10, 23, 37, 50, 100];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
  
//   if (min > numbers[i]) {
//     min = numbers[i];
           
//   }
  
// }
// console.log(min)

// const a = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(a(1, 2, 3, 4));
// console.log(a(1, 2, 3, 4, 5, 6, 7));

// ---------Використання псевдомасива -------------------
// const filterNumbers = function (array, ...args) {
//   const uniqueEltments = [];

//   for (const element of array) {

//     if (args.includes(element)) {
//       uniqueEltments.push(element);
//       // console.log(uniqueEltments);
     
//     }
    
//   }
//   return uniqueEltments
// }
// console.log(filterNumbers([1, 30, 20, 15, 10], 15, 30, 50, 6, 20));

// Пример 1 - Индекс массы тела
// Напиши характеристику, calcBMI(weight, height) которая
// вычисляет и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на
// квадратную высоту человека в метрах.

// Вес и высота будут специально переданы как строки.
// Нецелые числа могут быть заданы в виде 24.7или 24,7,
// то есть в качестве разделителя дробной части могут быть запятая.

// Индекс массы тела необходимо округлить до одной
//  цифры после запятой;

// const bmi = calcBMI('88,3', '1.75')

// const bmi = function (parametrs) {
//   let normaliseParametr = []

//   normaliseParametr.push(parametrs.replaceAll(",", "."));
//   console.log(normaliseParametr);
//   return normaliseParametr;
// }
 

// console.log(bmi); // 28.8
