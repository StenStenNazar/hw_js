// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x =-5;
if(x!==0 || x<0){
    console.log('вірно');
}
else console.log('невірно');
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 61;
if (time<=15 && time===0){
    console.log('перша четверть')
}
else if (time>15 && time<=30){
    console.log('друга чверть')
}
else if (time>30 && time<=45){
    console.log('3 чверть')
}
else if(time>45 && time<=60){
    console.log('4 чверть')
}
else console.log('не належить ні доодної з чвертей');

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 55;
if (day<=10 && day===1){
    console.log('1 декада')
}
else if (day>10 && day<=20){
    console.log(' 2 декада')
}
else if (day>20 && day<=31) {
    console.log('3 декада')
}
else console.log('не належить')
//
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let numberOfTheDay =+'2';
switch (numberOfTheDay){
    case 1:
        console.log('Monday');
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break
    case 5:
        console.log('Friday');
        break
    case 6:
        console.log('Saturday');
        break
    case 7:
        console.log('Sunday');
        break
    default:
        console.log('дня тижня з таким порядковим номером немає, введіть інше число')
}
//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 55;
let b =55;
if(a>b){
    console.log(a)
}
else if (b>a){
    console.log(b)
}
else if(a==b){
    console.log('числа рівні')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,
//      за допомоги  оператора || буде присвоювати змінній х значення "default"
//      якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let z=!!0;
console.log(z)
if (z==null || z==0 || z==undefined  || z==NaN ){
    z ='default'
    console.log(z);
}
else console.log('not default')
