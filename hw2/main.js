// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let a = ['mama', true, 'tato', null, false, 10, 1.2, -22, 0, 'rik']
console.log(a);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title: 'rik', pageCount: 100, genre:'roman' };
let book2 = {title: 'morty', pageCount: 200, genre:'comedy' };
let book3 = {title: 'bart', pageCount: 300 , genre: 'biography'};
console.log(book1,book2,book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {title: 'rik', pageCount: 100, genre:'roman', authors: ['king', 'shevchenko']};
let book5 = {title: 'morty', pageCount: 200, genre:'comedy', authors: ['mcPetya', 'Dzidzio']};
let book6 = {title: 'bart', pageCount: 300 , genre: 'biography', authors:['Harry', 'Potter']};
console.log(book4,book5,book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Homer', username: 'Simpson', password: 1},
    {name: 'March', username: 'Simpson', password:2},
    {name: 'Bart', username: 'Simpson', password:3},
    {name: 'Lisa', username: 'Simpson', password:4},
    {name: 'Mike', username: 'Tyson', password:5},
    {name: 'Tyson', username: 'Tyson', password:6},
    {name: 'Floyd', username: 'Mayweather', password:7},
    {name: 'Mayweather', username: 'Mayweather', password:8},
    {name: 'Rocky', username: 'Balboa', password:9},
    {name: 'Balboa', username: 'Balboa', password:10}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 10;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x!==0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 44;
if (time < 0){
    console.log('unreal time')
}
else if (time <= 14){
    console.log('first part of hour')
} else if (time <= 29){
    console.log('second part of hour')
} else if (time <= 44){
    console.log('third part of hour')
} else if (time <= 59){
    console.log('forth part of hour')
} else if (time > 59){
    console.log('unreal time')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day <= 0){
    console.log('Unreal Day')
} else if(day < 12){
    console.log('first decade')
} else if(day < 22){
    console.log('second decade')
} else if(day < 32){
    console.log('third decade')
} else if (day >= 32){
    console.log('Unreal Day')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (4){
    case 1:
        console.log('monday');
    break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let xx = -2;
let xx2 = -3;
if (xx === xx2){
    console.log('similar numbers')
} else if (xx < xx2){
    console.log(xx2)
} else console.log(xx);
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xxx = 2;
xxx = xxx || "default";
console.log(xxx);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(`${coursesAndDurationArray[0].title} - Super`)
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(`${coursesAndDurationArray[1].title} - Super`)
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(`${coursesAndDurationArray[2].title} - Super`)
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(`${coursesAndDurationArray[3].title} - Super`)
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title} - Super`)
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(`${coursesAndDurationArray[5].title} - Super`)
}