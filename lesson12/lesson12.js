//
// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
function createObj(name, age) {
    let item = {name: name, age: age}
    return item
}

let button = document.getElementById('1');
let inputs = document.getElementsByTagName('input');
button.onclick = function (e) {
    let user = JSON.stringify(createObj(inputs.name.value, inputs.age.value));
    localStorage.setItem(Math.round(Math.random() * 10000), user)
    inputs.name.value = ''
    inputs.age.value = ''
}
//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

function createObjCar(name, age,volume) {
    let item = {model: name, type: age, volume:volume}
    return item
}
let button1 = document.getElementById('2');
let inputs1 = document.getElementsByTagName('input');
button1.onclick = function (e) {
    let car = JSON.stringify(createObjCar(inputs1.model.value, inputs1.type.value,inputs1.volume.value));
    localStorage.setItem(Math.round(Math.random() * 10000), car)
    inputs1.model.value = ''
    inputs1.type.value = ''
    inputs1.volume.value = ''
}