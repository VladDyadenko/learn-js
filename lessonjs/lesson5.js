// вводится поле moodсо значением'happy'
// заменяет значение hobbyна'skydiving'
// заменяет значение premiumнаfalse
// выводит содержимое объекта userв формате,
//   ключ:значениеиспользуемом Object.keys()иfor...of
// Код
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.moodco = "happy";
// user.hobby = 'skydiving';
// user.premium = false;

// console.table(user)

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]};`);
// }

// Пример 2 — метод Object.values()
// У нас есть объект, в котором есть зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните
//  результат в пользу суммы.получить Должность 390.
//   Если объект salariesпуст, то результат должен быть 0.

// Код

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let totalValue = 0;
// for (const value of values) {
//     totalValue += value;
// }
// console.log(totalValue)

// Пример 3 - Массив объектов
// Напишите ф - цию calcTotalPrice(stones, stoneName),
//     которая собирает массив обьектов и корпусов с
//     названием камня.Ф - ция и общая стоимость камней
//     с таким именем, ценой и справедливостью считаются из
// обьекта

// Код

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
    
//     let totalPriceStoneName = 0;

//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             totalPriceStoneName += stone.price * stone.quantity;
//         }
//     }
//     return totalPriceStoneName;
// }

// function addStoneToStones({...args }) {
    
    
//     for (const stone of stones) {
//         console.log(stone)
//         if (stone.name === args.name) {
//             return stone.quantity += args.quantity;
//         }
//     }
//     return stones.push(args);
// }

// console.log(calcTotalPrice(stones, "Изумруд"));
// console.table(stones);
// console.log(addStoneToStones({ name: 'Щебень', price: 200, quantity: 2 }));
// console.table(stones);
// console.log(addStoneToStones({ name: 'Топаз', price: 500, quantity: 3 }));
// console.table(stones);

// Пример 4. Комплексные задачи
// Напишите скрипт управления личным кабинетом интернет - банка.
// Есть объект account, в котором реализованы методы работы
// с балансом и массовыми транзакциями.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const transactionType = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//     createTransaction(amount, type) {
//         return {
//             id: this.transactions.length,
//             amount,
//             type,
//         }
        
            


//     },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, transactionType.DEPOSIT);
//         this.transactions.push(transaction);


       


//      },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//     withdraw(amount) {

//         if (amount > this.balance) {
//             console.log(`Недостатньо коштів на балансі`);
//             return false;
//         }
//         this.balance -= amount;

//         const transaction = this.createTransaction(amount, transactionType.WITHDRAW);
//         this.transactions.push(transaction);
//     },
  
//     getBalance() {
//         return this.balance;
//     },
    
//   /*
//    * Метод возвращает текущий баланс
//    */
   
    
//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//     getTransactionDetails(id) {
        
        
//         for (const transaction of this.transactions) {
           
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
        
//     },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//     getTransactionTotal(type) {
//         let sum = 0;
        

//         for (const transaction of this.transactions) {
           
//             if (transaction.type === type) {
//                 sum += transaction.amount;
                
                
//             }
//         }

//         return sum;
//     },
// };

// account.deposit(11000);
// account.deposit(1000);
// account.deposit(3000);
// account.withdraw(2000);
// account.withdraw(8000);
// account.withdraw(1000);
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal('withdraw'));
// console.log(account.getBalance());


// Пример 1 - Деструктуризация
// Перепишите свойство так, чтобы она использовала один
//  параметр объекта вместо набора независимых аргументов.

// function calcBMI({ weight, height } ) {
//     console.log(weight, height)
    
//   const numericWeight = +(weight.replace(',', '.'));
//     const numericHeight = +(height.replace(',', '.'));
//   return +((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// Пример 2 - Деструктуризация
// Перепишите свойство так, чтобы она использовала
// один параметр объекта вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {

//   const nameList = names.split(",");
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Пример 3 - Глубокая деструктуризация
// Перепишите свойство так, чтобы она использовала
// один параметр объекта вместо набора независимых аргументов.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//   return `${companyName} has ${repair + defence} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Пример 4 - Деструктуризация
// Перепишите характеристику так, чтобы она имела значение
// объекта, companyName и stock выводила отчет о количестве
// товаров на складе любой компании.

// // Решение
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     let stockCompani = {};
 

//   for (const value of Object.values(stock)) {
//     total += value;
//     }
    
//     return stockCompani = {
//         companyName,
//         stock: total,
//     };

// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// Пример 6 - Операция отдыха
// Напишифунцію transformUsername(user)так,
//     щоб вона повертала новый об'єкт із властивістю fullName,
//     замість firstNameта lastName.

// Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }



// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

//   * Описание задачи: Напишите функцию, которая возвращает
//  вложенный массив вида`[[key, value], [key, value]]`.
//   * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
//   * Сложность задачи: 1 of 5
//   * @param {Object} object - любой объект для трансформации
//   * @returns {Array} - вложенный массив
// */

// export const makePairs = (object) => {
//   throw new Error(`Напишите здесь свое решение ${object}`);
// };

// function makePairs(object) {
//     const newArray = Object.entries(object);


//     // 2й варіант
//     // const newArray2 = Object.keys(object);
//     // let result = [];
//     // for (const key in object ) {
//     //     result.push([key, object[key]])
       
//     // }
    
//     return newArray;

// }

// const data = {
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50,

//   };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//    numbers.forEach((number, index) => {
//          if (number > value)
//         { filteredNumbers.push(number) }
    
//     });
//   // Change code above this line
//   return filteredNumbers;
// }

// Функція getCommonElements(firstArray, secondArray)
// приймає два масиви довільної довжини в параметри
// firstArray і secondArray, і повертає новий масив їхніх спільних
// елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for
// , вона використовувала метод forEach.


// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //   }
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//       commonElements.push(element)
//   }
    
//   });
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));


// const  calculateTotalPrice =(quantity, pricePerItem) =>{
//   // Change code above this line
    
    
//   return quantity * pricePerItem;
// }

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//     quantity * pricePerItem;

// // Change code above this line//
// console.log(calculateTotalPrice(5, 100));

// // Change code below this line
// const calculateTotalPrice = ((orderedItems) => {
//       let totalPrice = 0;

//     orderedItems.forEach((item) => totalPrice += item);
    

//       return totalPrice;
// });

// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Change code below this line
// const  getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//     firstArray.forEach((element) => {
      
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log("🚀 ~ file: lesson5.js ~ line 533 ~ planetsLengths", planetsLengths)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log("🚀 ~ file: lesson5.js ~ line 557 ~ titles", titles)

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log("🚀 ~ file: lesson5.js ~ line 579 ~ genres", genres)
// Change code below this line

// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter((genre, index, array) =>
// array.indexOf(genre) === index);
// console.log( uniqueGenres)

// Change code below this line

// Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));
    




// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     console.log(allFriends)
//     return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
    
// }


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((value, number) =>
// { return value + number; }, 0)
// console.log("🚀 ~ file: lesson5.js ~ line 616 ~ totalPlayTime", totalPlayTime)

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame =
// players.reduce((total, player) => {
//     return total + player.playtime/player.gamesPlayed
// }, 0);
// console.log(totalAveragePlaytimePerGame);


// // Change code below this line
// const calculateTotalBalance = users => {
//     const totalGaimerTime = users.reduce((total, user) => {
//         return total + (user.balance)
//     }, 0);
//     return totalGaimerTime;
    
// }
    

// const getTotalFriendCount = users => {
   
//     const sumFriends = users.reduce((total, user) => { return total + (user.friends.length) }, 0);
//     console.log(sumFriends)
//     return sumFriends;

// };
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates.sort((a,b) => a-b);
// const alphabeticalAuthors = authors.sort((a,b) => a.localeCompare(b));



// const sortByAscendingBalance = users => {
//     return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
   
// };

// const sortByDescendingFriendCount = users => {
//     return [...users].sort((firstUser, secondUser) =>
//         secondUser.friends.length - firstUser.friends.length);
// };

// const sortByName = users => {
//   return [...users].sort((firstUser, secondUser) =>
//         firstUser.name.localeCompare(secondUser.name));
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
// .filter(book => book.rating >= MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((a, b) => a.localeCompare(b));
  

// const getNamesSortedByFriendCount = users => {
//     const copyUsers = [...users]
    
//         .sort((firstUser, secondUser) =>
//             firstUser.friends.length - secondUser.friends.length)
//         .map(user => user.name);
    
//     return copyUsers;
// };

// const getSortedFriends = users => {
//     const copyUsers = [...users]
//         .flatMap(user => user.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b));
    
//     return copyUsers;
   
// };

// Пример 1 - Коллбек функций
// Напишите возможные функции:

// createProduct(obj, callback) - принимает объект товара без
// удостоверения личности, а также колбек.Функция создаёт
//  объект продукта, добавляя ему идентификатор идентификатора
//  в свойстве id и пути продвижения, передавая ему созданный
// объект.
//     logProduct(product) - коллбек принимающий обьект продукта
// и логгирующий его в консоль
// logTotalPrice(product) - коллбек приемного товара
//  и логирование общей стоимости товара в консоли

// Решение


// Пример 2 - Коллбек функций
// account второй withdraw(amount, onSuccess, onError)и
// deposit(amount, onSuccess, onError)третий - колбеки.

// Метод вызова onError withdraw, если сумма больше
//  TRANSACTION_LIMIT или this.balance, и onSuccess в данном
// случае.

// Метод вызова onError deposit, если количество
// больше TRANSACTION_LIMIT или меньше либо равносильно,
//и onSuccess в любом случае.

// Пример 7.

// Метод forEach
// Выполнитель рефакторинг кода с
// использованием методов forEachи стрелочных функций.

// function logItems(items) {
//     // console.log(items);
    
//     items.forEach((item, index) => console.log(`${index} - ${item}`) );

// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Пример 8.

// Метод forEach
// Выполнитель рефакторинг кода с использованием
// методов forEachи стрелочных функций.

// printContactsInfo = ({ names, phones }) => {
//     const nameList = names.split(',');
    
//     const phoneList = phones.split(',');
    
//     //   for (let i = 0; i < nameList.length; i += 1) {
//     //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//     //     }
//     nameList.forEach((element, index) => console.log(`${element} : ${phoneList[index]}`));
    
// }
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Пример 9.

// Метод forEach
// Выполнитель рефакторинг кода с использованием
// методов forEachи стрелочных функций.

// calсulateAverage = (...args) => {
 
//     let total = 0;
//     args.forEach(value => total += value);
    
// //   for (let i = 0; i < args.length; i++) {
// //     total += args[i];
// //     }
   
//     return total / args.length;

// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2


// invert = array =>
//     array.map(number => -number);
 
// console.log(invert([-1]));



// Fizzbuzz = n => {
//     let result = [];
//     for (let i = 1; i <= n; i += 1) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(`fizzbuzz`);
//             result.push(`fizzbuzz`);
//         } else if (i % 5 === 0) {
//             console.log(`buzz`);
//             result.push(`buzz`);
//         } else if (i % 3 === 0) {
//             console.log(`fizz`);
//             result.push(`fizz`);
//         } else console.log(i);
//         result.push(i);
//     }
//     return result;
// };

// console.log(Fizzbuzz(15));

// Пример 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName),
//     который принимает название камня и
//     вычисляет такую ​​стоимость камней с именем,
//     ценой и справедливостью из свойств stones.

// Выполните рефакторинг методов объекта,
//     phonebookчтобы код заработал.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       };
//       this.contacts.push(newContact);
//       return newContact;
//   },
//   generateId() {
//       let idGener = '_' + Math.random().toString(36).substr(2, 9);
//       return idGener;
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
// console.log(phonebook.contacts)

// Пример 3 - Калькулятор
// предполагаемый объект calculatorс ожидаемым результатом:

// read(a, b) - принимают два значения и сохраняют
// их как свойства объекта.
// add()- возвращается количество сохранённых измерений.
// mult() - перемножает сохранённые значения и возвращает
// результат.


// const calculator = {

//     data: {
//         number1: 0,
//         number2: 0,
//     },
//     read(a, b) {
        
//         this.data.number1 = a;
//         this.data.number2 = b;
//         return this.data;
        
//     },
//     add() {
        

//         return  { value: `Результат множення ${this.data.number1} на ${this.data.number2} дорівнює ${this.mult()} `         };
       
//     },
//     mult() {
        
//         let result = this.data.number1 * this.data.number2;
    
//         return  result ;
//     },
// };

// console.log(calculator.read(15, 20));
// console.log(calculator.mult());
// console.log(calculator.read(15, 30));
// console.log(calculator.mult());

// console.log(calculator.read(20, 30));
// console.log(calculator.add());

const books = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
];


const oldGender = "male";
const oldFriends = ["Goldie Gentry", "Briana Decker"];

const updaytbooks = books
    .filter(book => oldGender === book.gender)
    .map(book => ({ ...book, balance: book.balance + 1000 }))
    .reduce((acc, book) => acc + book.balance, 0); 

    
console.log(updaytbooks); 

const allFriends = books
    .reduce((friends, book) => [...friends, ...book.friends], [])
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .reduce((acc, friend) => {
        console.log(acc)
        return {
            ...acc,
            [friend]: acc[friend] ? acc[friend] + 1 : 1
        }

    }, {});
            

console.log(allFriends);

const array = [1, 5, 6, 9, 5,];
console.log(array[1])