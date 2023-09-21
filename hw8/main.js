// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = [
    new User(1, 'Sviat1', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(2, 'Sviat2', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(3, 'Sviat3', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(4, 'Sviat4', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(5, 'Sviat5', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(6, 'Sviat6', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(7, 'Sviat7', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(8, 'Sviat8', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(9, 'Sviat9', 'Shevchenko', 'Sv@gmail.com', '0788994900'),
    new User(10, 'Sviat10', 'Shevchenko', 'Sv@gmail.com', '0788994900')
];
console.log(user)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(user.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(user.sort((a, b) => a.id - b.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    new Client(1, 'Sviat1', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple1']),
    new Client(2, 'Sviat2', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple2', 'apple', 'apple']),
    new Client(3, 'Sviat3', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple3', 'apple']),
    new Client(4, 'Sviat4', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple4', 'apple', 'apple', 'apple']),
    new Client(5, 'Sviat5', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple5', 'apple', 'apple', 'apple', 'apple']),
    new Client(6, 'Sviat6', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple6', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple']),
    new Client(7, 'Sviat7', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple7', 'apple', 'apple', 'apple', 'apple', 'apple']),
    new Client(8, 'Sviat8', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple8', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple']),
    new Client(9, 'Sviat9', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple9', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple']),
    new Client(10, 'Sviat10', 'Shevchenko', 'Sv@gmail.com', '0788994900', ['apple10', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple'])
];

// - Взяти масив (Client [] з попереднього завдання ).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        console.log(`Модель - ${this.model}
Виробник - ${this.producer}
Рік випуску - ${this.year}
Максимальна швидкість - ${this.maxSpeed} 
Об'єм двигуна - ${this.engine}`)
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('m5', 'BMW', 2023, '340 Km', 4.4);
console.log(car);

car.drive();
car.info();

car.increaseMaxSpeed('341 km');
car.changeYear(2024);
console.log(car);

let driver1 = {
    name: 'Michael',
    surname: 'Shumacher',
    racing: 'Formula 1',
    experience: '20 years'
};
car.addDriver(driver1);
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
drive() {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info(){
        console.log(`Модель - ${this.model}
Виробник - ${this.producer}
Рік випуску - ${this.year}
Максимальна швидкість - ${this.maxSpeed} 
Об'єм двигуна - ${this.engine}`)
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newValue) {
        this.year = newValue;
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver (driver) {
        this.driver = driver;
    }
}
let car2 = new Car2('m5', 'BMW', 2023, '340 Km', 4.4);
console.log(car2);

car2.drive();
car2.info();

car2.increaseMaxSpeed('341 km');
car2.changeYear(2024);
console.log(car2);

let driver2 = {
    name: 'Michael',
    surname: 'Shumacher',
    racing: 'Formula 1',
    experience: '20 years'
};
car2.addDriver(driver2);
console.log(car2)
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let arrPopelushka = [
    new Popelushka('Ira', 34, 32),
    new Popelushka('Oksana', 35, 33),
    new Popelushka('Ivana', 36, 34),
    new Popelushka('Kate', 37, 35),
    new Popelushka('Bozhena', 38, 36),
    new Popelushka('Solomia', 39, 37),
    new Popelushka('Yustuna', 40, 38),
    new Popelushka('Vika', 41, 39),
    new Popelushka('Olena', 42, 40),
    new Popelushka('Ulyana', 43, 41)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = {
    name: 'Ivan',
    age: 63,
    tufelka: 39
}
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let popeluska of arrPopelushka){
    if (prince.tufelka === popeluska.footSize){
        console.log(popeluska)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(arrPopelushka.find(value => value.footSize === prince.tufelka));