// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let hello = 'hello'
console.log(hello);
let owu = 'owu';
console.log(owu);
let com ='com';
console.log(com);
let ua = 'ua';
console.log(ua);
let one = 1;
console.log(one);
let ten = 10;
console.log(ten);
let nn =- 999;
console.log(nn);
let oh= 123;
console.log(oh);
let p =3.14;
console.log(p);
let two = 2.7;
console.log(two);
let sten=16
console.log(sten);
let boolean= true;
console.log(boolean);
let boolean1 = false;
console.log(boolean1);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)
let firstName= 'Nazar';
let secondName ='Sten';
let midleName ='Ihorovych';
let person= `${firstName} ${secondName} ${midleName}`
console.log(person);
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a =100;
console.log(typeof(a))
let b = '100'
console.log(typeof (b));
let c = true;
console.log(typeof(c));
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name=prompt('Імя');
let midname = prompt('прізвище');
let andname = prompt('побатькові');
let age = prompt('вік');
console.log(name)
console.log(midname);
console.log(andname);
console.log(age);

