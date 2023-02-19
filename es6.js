//=============== Block Scope ===============//
/* const numbers = [20, 35, 41, 65, 12, 30];
console.log(numbers)

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
} */

//=============== Default Parameter ===============//
/* function add(first = 60, second = 40){
    console.log(first, second)
    const total = first + second;
    return total;
}
const result = add();
console.log(result); */

//=============== Template String ===============//
/* const a = 20;
const b = 30;
const summary = `Sum of: ${a} and ${b} is ${a + b}`
console.log(summary) */

//=============== Arrow Function ===============//
/* const add = function add(first, second){
    const total = first + second;
    return total;
}
const add1 = function(first, second){
    const total = first + second;
    return total;
}
const add2 = function(first, second){
    return first + second;
}
// Arrow function syntax
const add3 = (first, second) => first + second;

const result = add3(20, 30);
console.log(result); */

//=============== Multiline Arrow Function ===============//
/* const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
console.log(doMath(5, 8, 12)); */

//=============== Spread Operator ===============//
/* const numbers = [50, 30, 36, 165, 45, 95];
const largest = Math.max(...numbers);
console.log(largest); */

//=============== Destructuring ===============//
/* const fish = {
    name: 'King Hilsa', 
    address: 'Chandpur',
    color: 'silver',
    phone : '017176588899',
    price: 4000
}
// const phone = fish.phone;
const {phone, price} = fish;
console.log(price); */

//=============== Chaining & Optional Chaining ===============//
/* const users = [ {id: 1, name: 'abul', job: 'doctor'} ]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
// console.log(data.data[1].name);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 
console.log(user?.address?.stret) */

//=============== Array map() ===============//
/* const numbers = [2, 8, 4, 6, 3];
// Traditional way. //
const doubleIt = numbers => {
    const output = [];
    for(const number of numbers){
        const double = number * 2;
        output.push(double);
    }
    return output;
}
const result = doubleIt(numbers);
// console.log(result);

// With map() //
const makeItDouble = num => num * 2;
const makeDouble = numbers.map(makeItDouble);
// console.log(makeDouble);

const makeDoubleV2 = numbers.map(x =>{
    return x *2
});
console.log(makeDoubleV2); */

//=============== More map() ===============//
/* const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
// console.log(half);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman', 'D1'];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
const productsName = products.map(product => product.name);
console.log(productsName); */

//=============== forEach() ===============//
/* const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman', 'D1'];
// friends.forEach(friend => console.log(friend));

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
const productsName = [];
products.forEach(product => {
    productsName.push(product.name)
});
console.log(productsName); */