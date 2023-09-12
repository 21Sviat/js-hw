// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle =(a, b) => a * b;
console.log(sRectangle(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = r=> 3.14 * r ** 2;
console.log(sCircle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (h, r) => 2 * 3.14 * r * h;
console.log(sCylinder(3, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент
let concole = array => {
    for (let item of array) {
        console.log(item)
    }
}
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];
concole(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = text =>{
    document.write(
        `<p>${text}</p>`
    )
}

let a = 'lorem';
paragraph(a);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ul = text => {
    document.write(
        `<ul>
          <li>${text}</li>  
          <li>${text}</li>  
          <li>${text}</li>    
        </ul>`
    )
}

ul(a);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ul2 = (x, text) => {
    document.write(`<ul>`)
    for(let i = 0; i < x; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ul2(5, a)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primityv = array => {
    document.write(`<ul>`)
    for (let item of array){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

primityv([23, true, false, null, undefined, 0, 'abracadabra'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age, та виводить їх в документ. Для кожного об'єкту окремий блок.
const users2 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 }
];

let userInfo = array => {
    for (let user of array) {
        document.write(`<div>
                <p>${user.id}</p>
                <p>${user.name}</p>
                <p>${user.age}</p>
</div>`)
    }
}

userInfo(users2);
// - створити функцію яка повертає найменьше число з масиву

let nun = [1,1,3, -5];
let theSmalestNum = array => {
    let min = array[0];
    for (const number of array) {
        if (number < min){
            min = number
        }
    }
    console.log(min)
}
theSmalestNum(nun)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = arr => {
    let suma= 0
    for (let num of arr){
        suma += num
    }
    console.log(suma)
}
sum(nun)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr,index1,index2) => {
    let numIndex1 = arr[index1]
    arr[0] = arr[index2]
    arr[1] = numIndex1
    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let i of currencyValues){
        if (i.currency === exchangeCurrency){
            return `${sumUAH / i.value} ${i.currency}`
        }
    }
}
let result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(`result:`, result);