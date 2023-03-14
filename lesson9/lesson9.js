//
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content'));

// -- отримує текст з блоку з id "rules"
let textFromElementByIdRules = document.getElementById('rules')
console.log(textFromElementByIdRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'hello okten'

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'idinaher'

// -- змініть кожному елементу колір фону на червоний
let allElement = document.body.children;
for (let item of allElement) {
    item.style.backgroundColor = 'silver'
}
// -- змініть кожному елементу колір тексту на синій
let allElement1 = document.body.children;
for (let item of allElement1) {
    item.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassName = document.getElementsByClassName('fc_rules');
for (item of elementsByClassName) {
    item.style.backgroundColor = ' red '
}