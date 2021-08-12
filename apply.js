// ===================================================
// Inches To Feet
// ===================================================
function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var feetResult = inchToFeet(144);
console.log(feetResult);

// ===================================================
// Miles To Kilometer
// ===================================================
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(5)
console.log(marathon);

// ===================================================
// Even or Odd Number
// ===================================================
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}
const number = 144;
const result = isEven(number);
console.log(result);

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const number = 15;
const result = isOdd(number);
console.log(result);

// ===================================================
// Leap year
// ===================================================
function ifLeapYear(year){
    if(year % 4 == 0){
        return true;
    }else{
        return false;
    }
}
var result = ifLeapYear(2022);
console.log(result);

// ========== Correct way to execute leep year ==========
function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log(year + " Year is a leep year");
    }else{
        console.log(year + " year is not a leep year");
    }
}
checkLeapYear(2400);

// ===================================================
// Factorial 
// ===================================================
var factorial = 1;
for(var i = 1; i <= 7; i++){
    console.log(i);
    factorial = factorial * i;
}
console.log(factorial);

// ===================================================
// Factorial with Function
// ===================================================
function getFactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let result = getFactorial(7);
console.log(result);

function getFactorial (number){
    let factorial = 1;
    let i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
let result = getFactorial(7);
console.log(result);

function getFactorial (number){
    let factorial = 1;
    let i = 7;
    while(i >= number){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let result = getFactorial(1);
console.log(result);

function getFactorial(number){
    let factorial = 1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
let myFactorial = getFactorial(7);
console.log(myFactorial);

// ===================================================
// Celsius To Fahrenheit
// ===================================================
function celsiusToFahrenheit(celsius){
    let calculation = celsius * 1.8 + 32;
    return calculation;
}
let celsius = 55;
let conversionResult = celsiusToFahrenheit(celsius);
console.log(conversionResult);

// ===================================================
// Fahrenheit To Celsius
// ===================================================
function fahrenheitToCelsius(fahrenheit){
    let calculation = (fahrenheit - 32) * 5/9;
    calculation = calculation.toFixed(3);
    return calculation;
}
let fahrenheit = 55;
let conversionResult = fahrenheitToCelsius(55);
console.log(conversionResult);

// ===================================================
// Grade Calculation
// ===================================================
function studentGrade(mark){
    if(mark >= 80 && mark <= 100){
        var aPlus = console.log("Congratulations You Got A+ : ", mark);
        return aPlus;
    }else if(mark >= 70 && mark <= 79){
        console.log("You Got A : ", mark);
    }else if(mark >= 60 && mark <= 69){
        console.log("You got A- : ", mark);
    }else if(mark >= 50 && mark <= 59){
        console.log("You got B : ", mark);
    }else if(mark >= 40 && mark <= 49){
        console.log("You got C : ", mark);
    }else if(mark >= 33 && mark <= 39){
        console.log("You got D : ", mark);
    }else if(mark >= 0 && mark <= 32){
        console.log("You got F : ", mark);
    }else{
        console.log("Enter valid number");
    }
}
var studentMark = 78;
studentGrade(studentMark);

// ===================================================
// Simple Interest
// ===================================================
function interest(p,n,r){
    let calculation = (p * r / 100 * n);
    return calculation;
}
let principalBalance = 150450;
let interestRate = 3.875;
let time = 5;
console.log(interest(principalBalance, time, interestRate));

// ===================================================
// Recursive Function
// ===================================================
function factorial(n){
    if(n == 1){
        return 1;
    }else {
        return n * factorial(n - 1);
    }
}
const myFactorial = factorial(7);
console.log(myFactorial);

/* Recursive Function Theory
===================================
7 * recursiveFactorial(7-1 = 6)
6 * recursiveFactorial(6-1 = 5)
5 * recursiveFactorial(5-1 = 4)
4 * recursiveFactorial(4-1 = 3)
3 * recursiveFactorial(3-1 = 2)
2 * recursiveFactorial(2-1 = 1)

7 * 6 * 5 * 4 * 3 * 2 * 1
6 * 5 * 4 * 3 * 2 * 1
5 * 4 * 3 * 2 * 1
4 * 3 * 2 * 1
3 * 2 * 1
2 * 1
===================================
*/

// ===================================================
// Find highest number in Array
// ===================================================
function oldestPerson(ages){
    let oldestAge = ages[0];
    for(i = 0; i < ages.length; i++){
        const element = ages[i];
        if(element > oldestAge){
            oldestAge = element;
        }
    }
    return oldestAge;
}
const personAges = [12, 54, 8, 34, 75, 32, 12];
const oldest = oldestPerson(personAges);
console.log(oldest);

// ===================================================
// Find lowest number in Array
// ===================================================
function youngestPerson(ages){
    let youngestAge = ages[0];
    for(let i = 0; i < ages.length; i++){
        let element = ages[i];
        if(element < youngestAge){
            youngestAge = element;
        }
    }
    return youngestAge;
}
const personAges = [12, 54, 8, 34, 75, 32, 12];
const youngest = youngestPerson(personAges);
console.log(youngest);

// ===================================================
// Fibonacci
// ===================================================
// nth = (n-1)th + (n-2)th

const fibo = [0, 1]
for (let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo [i - 2];
}
console.log(fibo);

function fabonacci(num){
    let fibo = [0,1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fabonacci(15))

// ===================================================
// Avoid duplicate in random numbers
// ===================================================
const selected = [];
for(let i = 0; i < 10; i++){
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }else{
        console.log(selected, picked);
    }
}
console.log(selected);

// ===================================================
// Remove duplicate in arrays
// ===================================================
function removeDuplicate(allNames){
    const unique = [];
    for(const nameFilter of allNames){
        if(unique.indexOf(nameFilter) == -1){
            unique.push(nameFilter);
        }
    }
    return unique;
}
const names = ["ami", "tumi", "amra", "ora", "era", "sobai", "amra", "tumi", "era"];
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

// ===================================================
// Reverse string
// ===================================================
function reverseString(text){
    let reverseText = "";
    for(const letter of text){
        reverseText = letter + reverseText;
    }
    return reverseText;
}
const greetings = "Hello, How are you?";
const reverse = reverseString(greetings);
console.log(reverse);

// ===================================================
// Add and Multiplication
// ===================================================
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    // Totla Wood
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const mainResult = woodCalculator(4,5,2);
console.log(mainResult);

// ===================================================
// Print text if divisible by 3 or 5 or both
// ===================================================
for(let i = 1; i <= 50; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
        console.log("3 & 5 diye vag jay");
    }else if(i % 3 == 0){
        console.log("3 diye vag jay");
    }else if(i % 5 == 0){
        console.log("5 diye vag jay");
    }else{
        console.log(i);
    }
}

// ===================================================
// Find cheapest phone from Array of object
// ===================================================
const phones = [
    {name: "sansung s5", price: 45000, camera: 10, storage: 32},
    {name: "walton m32", price: 15000, camera: 8, storage: 8},
    {name: "xiomi m3", price: 12000, camera: 8, storage: 16},
    {name: "oppo a2", price: 17000, camera: 10, storage: 32},
    {name: "nokia n95", price: 8000, camera: 2, storage: 4},
    {name: "htc h81", price: 25000, camera: 5, storage: 8},
]

let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);

// ===================================================
// Shopping cart price calculator
// ===================================================
const products = [
    {name : "laptop", price: 43000},
    {name : "shirt", price: 500},
    {name : "watch", price: 3680},
    {name : "phone", price: 55000},
];
let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);

// ========== With quantity ==========
const cart = [
    {name : "laptop", price: 43000, quantity: 1},
    {name : "shirt", price: 500, quantity: 8},
    {name : "watch", price: 3680, quantity: 3},
    {name : "phone", price: 55000, quantity: 1},
];
let cartTotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal += productTotal;
}
console.log(cartTotal);

// ===================================================
// Counting animals on average for specific miles
// ===================================================
function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }else if(miles <= 20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;

        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        
        const totalAnimals = firstDenseAnimals + secondDenseAnimals+ restDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);

// ===================================================
// Matching product by search
// ===================================================
const products = [
    {name: "samsung s3 phone", price: 12000},
    {name: "asus laptop d34", price: 32000},
    {name: "apple smart watch", price: 18000},
    {name: "boshundhara binding paper", price: 80},
    {name: "lg smart phone", price: 10000},
    {name: "old granny land phone", price: 100},
    {name: "samsung watch", price: 1000},
    {name: "hp laptop", price: 31000},
    {name: "lenovo laptop", price: 41000},
]

function searchProducts(products, searchText){
    const matched = [];
    for(const product of products){
        const name = product.name;
        if(name.indexOf(searchText) != -1){
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, "laptop");
console.log(matched);