"use strict";

// createProduct(obj, callback) - приймає об'єкт сырого без
// удостоверения личности, а також коллбек.Функція створює
//  об'єкт товара, додаючи йому уникальный идентифікатор у
//  власти idта викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек принимаючий об'єкт
// продукта и логуючий його в консоли

// logTotalPrice(product) - колббек, который потребляет
//  об'єкт продукта и логіює загальну ценность продукта в консоли
// Рішення

// 1 ВАРІАНТ-------------------------

// const productList = [
//     {
//         name: "Banana",
//         amount: 5,
//         price:14,
//     }
// ]

// createProduct = (obj, callback) => {
    
//    obj.id = Date.now();
//     callback(obj);
    
// }
    
// logProduct = product => console.log(product);

// logTotalPrice = product => console.log(product.amount * product.price);

// createProduct(productList[0], logProduct);

// createProduct(productList[0], logTotalPrice);

// 2 ВАРІАНТ -------------------------

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Пример 2 - Коллбек функций

// Додайте об'єкт accountметоди withdraw
// (amount, onSuccess, onError)
// та deposit(amount, onSuccess, onError),
// де перший параметр сума операції,
// а другой та трій - коллбеки.

// Метод выявляет ошибку как большую сумму
// TRANSACTION_LIMIT на этом балансе,
//     так и в случае успеха в указанное випадку withdraw.

// Метод викликает depositonError как большую сумму
// TRANSACTION_LIMIT или меньше или дольше,
//     и onSuccess в свою очередь.

// Рішення

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: "Alex",
//     balanc: 2000,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balanc) {
//             onError("Недостатньо коштів на балансі!");
//         } else if (amount > TRANSACTION_LIMIT) {
//             onError("Ви перевищили ліміт!");
//         } else {
//             this.balanc -= amount;
//             onSuccess(`Гроші знято! Поточний баланс ${this.balanc}`)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError("Ви перевищили ліміт")
//         } else if (amount <= 0) {
//             onError(`Неможливо виконати транзакцію. Сума операції ${amount}`);
//         } else this.balanc += amount;
//         onSuccess(`Доступна сума ${this.balanc}`);
//     },
// }

// handleSuccess = message => console.log(`Успішна операція! ${message}`);
// handleError = message => console.log(`Помилка! ${message}`);

// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(1100, handleSuccess, handleError);
// account.deposit(950, handleSuccess, handleError);
// account.deposit(1100, handleSuccess, handleError);
// account.deposit(1100, handleSuccess, handleError);


// Напишите функцию each(array, callback),
// как первичный параметр очіку масив,
// а другой - функцію, кака стосовується до
// кожного элемента масиву.Функція каждого повинна
// верни новый масив, элементами якого будут
// результаты виклику коллбека.

// each = (array, callback) => {
//     const newArray = [];

//     array.map(element => newArray.push(callback(element)));

//     return newArray;
// }

// pow = num => num ** 2;
// addOne = num => num + 1;

// const firstArray = [1, 2, 56, 8, 45, 26];

// console.log(each(firstArray, pow));
// console.log(each(firstArray, addOne));





// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);







// Задача 1
// Напишите однострочное решение, которое вычисляет
// сумму квадратных корней для всех чётных чисел
// целочисленного массива.


// const array = [15, 25, 68, 42, 50, 16, 7];
    
// const result = array.reduce((acc, value) =>
//     (value % 2 === 0) ?
//         acc += value**2
//         : acc, 0)

// const cars = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//     { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//     { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//     { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//     { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
//   ];

// //   const getModels = cars => cars.map(el => el.model);

// const filtredArr = cars.filter(car => (car.amount>=5 && car.price <= 25000));
// console.table("🚀 ~ file: lesson6.js ~ line 215 ~ filtredArr", filtredArr)



// const getTotalAmount = cars => cars.reduce((acc,car) => acc +=car.amount ,0);

// console.log(getTotalAmount(cars));

// console.table(getModels(cars));

// const filterByPrice = (cars, threshold) => 
//     cars.filter(car => (car.price < threshold));

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// const getCarsWithDiscount = cars => cars.filter(car => {
//     if(car.onSale === true) {
//         return car.type;
//     }} ) ;

// console.table(getCarsWithDiscount(cars));

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);    


// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const sortByAscendingAmount = cars => cars.sort((car1, car2) => car1.amount - car2.amount);

// console.table(sortByAscendingAmount(cars));

// const sortByModel = (cars, order) => cars.sort((a,b) => {
//     switch(order){
//         case "asc":
//             return a.model.localeCompare(b.model);
//         case "desc":    
//         return b.model.localeCompare(a.model);
//     }
// });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
