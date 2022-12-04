// Пример 1 - Основы объектов
// Напишите скрипт, который, для объекта user, последовательно:
























// Напишифункцію calcBMI(weight, height)как розраховує и поверте
// індекс маси тіла людини.Для этого необхидно розділити
//  вагу в кілограмах на площади высотни людей в метрах.

// Вага и высота будут специально переданы в ряды.Не
//  целые числа могут быть заданы у вигляда или, то есть як
//  роздільник 24.7дробової 24, 7частини може бути кома.

// индекс массы тіла необхідно округлити до одних цифр
// списк коми;

// const bmi = calcBMI('90,5', '1,75');
// console.log(bmi); // 28.8

// function calcBMI(weight, height) {
//     weight = replaceCommaToDot(weight);
//     height = replaceCommaToDot(height);
//     return getRoundedNumber(weight / height ** 2);
// }


// function replaceCommaToDot(string) {
//     return string.replace(",", ".");

// }

// function getRoundedNumber(number) {
//     return +number.toFixed(1);
// }
    
// Пример 2 - Наименьше з чисел
// Напишифункцію min(a, b), как поверте наименьшее количество
//  чисел aта b.

// function findLargestNumber(numbers) {
//     let max = numbers[0];
   
//     for (const number of numbers) {
//         if (number > max) {
//             max = number;

//         }
//     }
//     return max;

// }

// console.log(findLargestNumber([0, 2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83



// Напишите функционирование, которое имеет довильное
// calAverage()количество аргументов и возвращает их
//  среднее значение.Усі аргументи будут только числами.

// function calAverage() {
//     const numbers = arguments;
//     const numbersAmount = numbers.length;
//     let sum = 0;
//     for (const number of numbers) {
//         sum += number;
//     }
//     return sum / numbersAmount;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// Вибере рандомне значення

// const fruits = ['banana', 'apple', 'orange',
// 'watermelon', 'apple', 'orange', 'grape', 'apple',];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit);

// Пример 2 - Меньшее из чисел
// Напиши свойство min(a,b), которое возвращается меньше из чисел a и b.

// console.log(Math.min(2, 5));
// console.log(Math.min(3, -1));
// console.log(Math.min(1, 1));

// Example 7 - Среднее значение
// Напишите функцию calAverage() которая принимает произвольное
// кол - во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.


// function calAverage(... args) {
    
//     let sumTotal = 0;
   
//     for (i = 0; i < args.length; i += 1) {
//         sumTotal += args[i];
        
        
//     }
//     let someValue = sumTotal / args.length;
//     return someValue;
  
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт
// значение minutes(количество минут) в строку в формате
// часов и минут HH: MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {

//     const hours = Math.floor(minutes / 60);
//     const minute = minutes % 60;
//     // console.log(hours);
//     // console.log(minute);
//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(minute).padStart(2, 0);
//     const atMomentTime = `${doubleDigitHours}:${doubleDigitMinutes}`;
//     return atMomentTime;
// }

// console.log(formatTime(70));
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// const euros = [29.76, 41.85, 46.5];
// const sum = console.log(euros.reduce((total, amount) => total * amount).toFixed(2));

// const euros = [29.76, 41.85, 46.5];
// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//     if (index === array.length - 1) {
//     return console.log(total/array.length);
//   }else {
//     return total;
//   }
// });
// console.log("🚀 ~ file: lesson4.js ~ line 81 ~ average ~ average", average)
// const euros = [29.76, 41.85, 46.5];
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);
// console.log( doubled)


// const fruitBasket = ['banana', 'cherry', 'orange', 'apple',
// 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange',
// 'fig'];
// const count = fruitBasket.reduce( (tally, fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1 ;
//   return tally;
// } , {})
// console.log( count)

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300, 9000025555';

// const adressBook = names.split(",").concat(phones.split(","));
// console.log(adressBook)
// let newAdressBook = [];
// for (i = 0; i < adressBook.length / 2; i += 1) {
//     if (adressBook % 2) {
//         newAdressBook = (adressBook[i] + ": " + adressBook[(adressBook.length / 2) + i]);
        
//     console.table(newAdressBook)
//     } else {
//         newAdressBook = ( adressBook[i] + ": " + adressBook[Math.ceil(adressBook.length / 2) + i]);
//         console.table(newAdressBook)
//     }
     
    
// }
    

// const mistake = names.reduce((total, phon) => {
//     total.push(phon);
//     return total;
// }, []);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// apartment.owner = {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com",
// }
// console.log(apartment)

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// console.log( values)
// // Change code below this line
// const keys = Object.keys(apartment);


// for (const key of keys) {
//     console.log(key)
//     values.push(apartment[key]);
// }

// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
    
//     const keys = Object.keys(object);
  
//     for (const key in object) {
      
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
      
//     }
//   }
  
//   return propCount;
//   // Change code above this line
// }



// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
  
// const keys = Object.keys(object);
  
//   for (const key in keys) {
//     if (keys.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// let propCount = 0;
// // Change code below this line
// const keys = Object.keys(apartment);


// for (const key of keys) {

//     values.push(apartment[key]);
//     if (keys.hasOwnProperty(key)) {
//         propCount += 1;
//         console.log(propCount)
//     }
// }




// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
    

//     for (const key in salaries) {
//         if(salaries.hasOwnProperty(key))
//         totalSalary += salaries[key];
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({}));



// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// console.log( hexColors)
// const rgbColors = [];
// console.log( rgbColors)
// // Change code below this line

// for (const key of colors) {
//     hexColors.push(key.hex);
//     rgbColors.push(key.rgb);
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
    
//     for (const key of products) {
//         console.log(key);
//         if (key.name === productName) {
//             return key.price
//         }
  
//     }
//     return null;
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Engine"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let result = [];
  
//     for (const product of products) {
        
//         if (propName in product) {
//             console.log( propName in product )
//             result.push(product[propName]);
//         }
//     }
  
//     return result;

// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// Напиши функцію calculateTotalPrice(productName),
//     яка приймає один параметр productName - назва товару.
//     Функція повинна повернути загальну
// вартість(ціна * кількість) товару з таким
// ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let total = 0;

//     for (const product of products) {
//         console.log(product)
//         if (product.name === productName) {
//             total += product.price * product.quantity;
//         }
        
     

       
//     }

//     return total;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Blaster"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// У прогнозі максимальних температур також може бути
// необов'язкова властивість icon - іконка погоди.
// Заміни оголошення змінних yesterday, today, tomorrow і
// icon однією операцією деструктуризації властивостей
// об'єкта highTemperatures.Задай значення за замовчуванням для
// icon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;



// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log("🚀 ~ file: lesson4.js ~ line 448 ~ meanTemperature", meanTemperature)


// Заміни оголошення змінних highYesterday, highToday,
//highTomorrow і highIcon однією операцією деструктуризації
// властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для highIcon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow : highTomorrow, highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;


// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// console.log("🚀 ~ file: lesson4.js ~ line 484 ~ hexColors", hexColors)
// const rgbColors = [];
// console.log("🚀 ~ file: lesson4.js ~ line 486 ~ rgbColors", rgbColors)
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// Ми отримали прогноз погоди на два дні, з мінімальними
//  і максимальними температурами, а також необов'язковими іконками.
//  Заміни оголошення всіх змінних однією операцією
//   деструктуризації властивостей об'єкта forecast.
//   Задай значення за замовчуванням для іконок,
//     змінних todayIcon і tomorrowIcon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// function calculateMeanTemperature(forecast) {
// //   const todayLow = forecast.today.low;
// //   const todayHigh = forecast.today.high;
// //   const tomorrowLow = forecast.tomorrow.low;
// //   const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//     const { today: { low: todayLow, high: todayHigh },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
    
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// temps[0] = 10;
// console.log(temps)
// console.log(copyOfTemps)

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log( finalSettings)

// function makeTask(data) {

 

//     let newObject = { completed: false,
//    category: "General",
//    priority: "Normal",}
  
//   // Change code below this line
//     let object = {...newObject, ...data};
//   return object;
//   // Change code above this line
// }



// // console.log(makeTask({}));
// console.log(makeTask({
//     category: "Homemade", priority: "Low",
//     text: "Take out the trash"
// }));
// console.log(makeTask({
//     category: "Finance",
//     text: "Take interest"
// }));

// Використовуючи операцію rest, доповни код функції add()
//  таким чином, щоб вона приймала будь - яку кількість аргументів,
//     рахувала і повертала їх суму.

// Change code below this line
// function add(...args) {
//     console.log(args)
//     const values = args;
//     let total = 0;
    
//     for (const value of values) {
        
//         total += value;
//     }
    
//     return total;
//   // Change code above this line
// }
// console.log(add(15, 27));

// Функція addOverNum() рахує суму всіх аргументів.
//  Зміни параметри і тіло функції addOverNum() таким чином,
//     щоб вона рахувала суму тільки тих аргументів, які більші
//     за задане число.Це число повинно бути першим параметром фун
// Change code below this line
// function addOverNum(firstNumber,...args) {
//   let total = 0;

//     for (const arg of args) {
//       if(arg > firstNumber)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів
// будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий
//  масив matches, в якому будуть тільки ті аргументи, починаючи
//   з другого, які є в масиві першого аргументу.

//     Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна
// повернути масив[1, 2], тому що тільки вони є в масиві
// першого аргументу.

// Change code below this line
// function findMatches(FirstValue, ...args) {
//   console.log( args)
//   console.log( FirstValue)
//   const matches = []; // Don't change this line
    
//     for (const arg of args) {
//         for (value of FirstValue) {
//             if (arg === value) {
//                 matches.push(value);
//             }
//         }
//     }
//     return matches;
//   // Change code above this line
//   return matches;
// }


// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));


// Додай об'єкту bookShelf ще два методи, які поки що будуть
// повертати просто рядки за аналогією з
// getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>",
// де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву
//  книги на нову.Повертає рядок "Updating book <стара назва>
// to < нова назва > ", де < стара назва > і < нова назва > -
// це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//   removeBook(bookName) {

//     return `Deleting book ${bookName}`
//     },
//   updateBook(oldName, newName) {
      
//     return `Updating book ${oldName}
//      to ${newName}`;
//     }
//   // Change code above this line
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// Доповни метод updateBook(oldName, newName) таким чином,
// щоб він змінював назву книги з oldName на newName у
// властивості books.Використовуй indexOf() для того,
// щоб знайти потрібний елемент масиву, і splice() для того,
// щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const { books } = this;
//       const oldBookLength = [...books].indexOf(oldName);
//       console.log(oldBookLength)
//       return books.splice(oldBookLength, 1, newName);
   
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);


// До нас звернулася власниця крамниці зілля
//  «У старої жаби» і замовила програму для ведення
// інвентарю - додавання, видалення, пошуку та
// оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions,
//  значенням якої зроби порожній масив.


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//       const { potions } = this;
//       let numberOldName = potions.indexOf(oldName);
//       return potions.splice(numberOldName, 1, newName);

//     // Change code above this line
//   },
// };


