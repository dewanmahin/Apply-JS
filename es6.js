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
const users = [ {id: 1, name: 'abul', job: 'doctor'} ]
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
console.log(user?.address?.stret)