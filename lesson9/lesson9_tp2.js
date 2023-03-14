// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').className ='h1'
// b) робить шириниу елементу ul 400px
let elementsByClassName = document.getElementsByTagName('ul');
for (let item of elementsByClassName) {
    item.style.width='400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let elementWithLinkList = document.getElementsByClassName('linkList ')
for (let item of elementWithLinkList) {
    item.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listElementText = document.getElementsByClassName('listElement2')
for(item of listElementText){
    console.log(item.innerText)
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let getElementli = document.getElementsByTagName('li');
for (item of getElementli){
    item.style.backgroundColor = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let getElemenstA = document.getElementsByTagName('a');
for (item of getElemenstA){
    item.className = 'anchor'
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
let getElementsAAA = document.getElementsByTagName('a');
for (item of getElementsAAA){
    if(item.innerText =='link3'){
        item.style.fontSize='40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let ga = document.getElementsByTagName('a')
for(item of ga){
    item.className = "element_"+item.innerText
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let gSubHeder = document.getElementsByClassName('sub-header');
// let color1 = prompt('what color')
// for (item of gSubHeder){
//     item.style.backgroundColor = color1
// }
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
// let getElementSubHeder =document.getElementsByClassName('sub-header');
// let color = prompt('what color?')
// for (item of getElementSubHeder){
//     if(item.innerText === 'content 2 segment'){
//         item.style.color = color
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let getElementByClassContent1 =document.getElementsByClassName('content_1');
// let text = prompt('What text?')
// for(item of getElementByClassContent1){
//     item.innerText = text;
// }
// l) отримати елементи p та змінити їм padding на 20px
let getP = document.getElementsByTagName('p');
for(item of getP){
    item.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let getText2 = document.getElementsByClassName('text2');
console.log(getText2);
for (item of getText2){
    item.innerText='sep-2021'
}