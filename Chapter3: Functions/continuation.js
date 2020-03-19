/*
 Write a range function that takes two arguments, 
 start and end, and returns an array 
 containing all the numbers from start up to (and including) end .
 */
function range(start, end) {
    let array = [];
    for(let i = start; i <= end; ++i) {
        array.push(i);
    }
    return array;
}

/*
 Write a sum function that takes an array of numbers
 and returns the sum of these numbers.
 */
function sum(array) {
    let sum = 0;
    let size = array.length;
    for(let i = 0; i < size; ++i) {
        sum += array[i];
    }
    return sum;
}

function reverseArray(array)
{
    let answer = [];
    for(let i = array.length - 1; i >= 0; --i) {
        answer.push(array[i]);
    }
    return answer;
}

function reverseArrayInPlace(array)
{
    let size = array.length;
    let halfSize = size / 2;
    for(let i = 0; i < halfSize; ++i) {
        let temp = array[i];
        array[i] = array[size - i - 1];
        array[size - i - 1] = temp;
    }
    return array;
}

function divisibleBy3(...numbers)
{
    let result = [];
    for(let number of numbers) {
        if(0 === number % 3) {
            result.push(number);
        }
    }
    return result;
}

/*
 Function to count the product of array elements.
 */
function reduceArray(arr)
{
    const product = (num1, num2) => num1 * num2;
    return arr.reduce(product);
}
/*
 Function to filter all odd elements from given array.
 */
function filterArray(arr)
{
    const odd = (num) => num % 2 === 1;
    let result = arr.filter(odd);
    return result;
}

/*
 Function to count the cube of array elements.
 */
function mapArray(arr)
{
    const cube = (num) => num ** 3;
    let result = arr.map(cube);
    return result;
}

/*
 Function to create a list from given array.
 */
function arrayToList(arr)
{
    let list = null;
    for(let i = arr.length - 1; i >= 0; --i) {
        list = { value: arr[i], rest: list};
    }
    return list;
}

/*
 Function to create array from given list.
 */
function listToArray(list)
{
    let arr = [];
    for(let item = list; item !== null; item = item.rest) {
        arr.push(item.value);
    }
    return arr;
}

/*
 Function that checks whether all elements in array correspond to indicator.
 */
function every(arr, indicator)
{
    for(let item of arr) {
        if(!indicator(item)) {
            return false;
        }
    }
    return true;
}
/*
 Function that checks if any element in array corresponds to indicator.
 */
function some(arr, indicator)
{
    for(let item of arr) {
        if(indicator(item)) {
            return true;
        }
    }
    return false;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(divisibleBy3(1, 0, 8, 6, 7, 12, 32, 24, 69));
console.log(reduceArray([1, 2, 3, 4]));
console.log(filterArray([1, 2, 3, 4]));
console.log(mapArray([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayToList([1, 2, 3]));
console.log(every([9, 21, 49, 78, 11], n => n >= 9));
console.log(some([11, 23], n => n % 7 === 0));
