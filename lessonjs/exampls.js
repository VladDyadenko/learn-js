// змінні
console.log("primitives variables")
// string
const string = "users"
console.log(typeof string);

// number
const num = 100;
console.log(typeof num);

// Boolian
const booltrue = true;
const boolfalse = false;
console.log(typeof true);

// null нулевой
const somenullvalue = null;
console.log(somenullvalue);

// undefined неопределенный
const someundefinedvalue = undefined;
console.log(someundefinedvalue);

// object
console.log("object")
const obj = {
    name: "vladimir",
    adg: 47,
    lastname: "victorovich",
};

const obj2 = {};

obj2.name = "vladimir";
obj2.adg = 47;

obj2['adg'] = 47;
obj2.adg = 48;

console.log(obj);    
console.log(obj2.adg);

// bir Int робота з великими числами

console.log(Number.MAX_SAFE_INTEGER);
const bigint = 999999999999999999999n;
// console.log(typeof bigint);
console.log("big int");

// symbol

const user = {
    id: 10,
    adg: 47,
    
};

const id = Symbol("some new symbol");
user[id] = 500;
console.log(user);
console.log("symbel");

// Оператори
console.log("operator block");

// if  else  operator
console.log("if else");


// const isuserloggedin = true;
// if (isuserloggedin) {
//     alert("You are logged in!")
// } else {
//     alert("You are not logged!")
// }

//  tearnary operator
console.log("tearnary");

// isuserloggedin ? alert("You are logged in!") : alert("You are not logged!");


// switch operator
console.log("switch");

// const age = 70;
// switch (age) {
//     case 10:
//         alert("happy birsday!");
//         break;
//     case 20:
//         alert("happy birsday!");
//         break;
//     case 30:
//         alert("happy birsday!");
//         break;
//     default:
//         alert("Heppy!");
// }

// const name = "Vladimir"
// switch (name) {
//     case "Vladimir":
//         alert("happy birsday!");
//         break;
//     case "Olga":
//         alert("happy birsday!");
//         break;
//     case "Valera":
//         alert("happy birsday!");
//         break;
//     default:
//         alert("Heppy!");
// }

// arithmetic
// console.log("arithmetic");

// const num1 = 110;
// const num2 = 20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 % num2); 

// // 

const age = 47;
// console.log(adg);
// adg = "Vladimir";
// console.log(adg);

// const isUserloggenIn = false;

if (age) {
    console.log("true")
}
// конвертуються в false, інше в true.
// 0
// -0
// NaN
// undefined
// null
// ''

let get = 10;
let get1 = '10'

















