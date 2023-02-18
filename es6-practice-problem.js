/* const addParameter = (num1, num2 = 6) =>{
    return num1 + num2;
}
console.log(addParameter(4)); */

/* const friends = names => {
    const evenName = []
    for(const name of names){
        if(name.length % 2 == 0){
            evenName.push(name);
        }
    }
    return evenName;
}
const friendsName = ['mahin', 'chowdhury', 'd1', 'reza', 'naima', 'taqdir'];
const result = friends(friendsName);
console.log(result); */

/* const squareSum = (numbers) => {
    const squareNumbers = []
    for(const num of numbers){
        squareNumbers.push(Math.pow(num, 2));
    }
    let total = 0;
    for(const squareAddition of squareNumbers){
        total += squareAddition;
    }
    const result = total / numbers.length;
    return result;
}
const numbers = [2, 5, 7, 3, 4, 9];
const result = squareSum(numbers);
console.log(result); */

/* const findMax = (ar1, ar2) => {
    const anArray = [...ar1, ...ar2];
    const largest = Math.max(...anArray);
    return largest;
}
const ar1 = [25, 15, 30, 150, 88, 99, 159];
const ar2 = [95, 205, 52, 89, 71, 93, 10];
const result = findMax(ar1, ar2);
console.log(result); */