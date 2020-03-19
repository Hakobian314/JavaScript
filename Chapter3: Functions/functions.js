/*
 Correct variable names consist only of English letters,
 digits and underscores and they can't start with a digit.
 Check if the given string is a correct variable name.
 For name = "var_1__Int", the output should be:
 variableName(name) = true;
 For name = "qq-q", the output should be:
 variableName(name) = false
 */
function variableName(inputString)
{
    let size = inputString.length;
    for(let i = 0; i < size; ++i)
    {
        if (!(inputString[i] >= 'a' && inputString[i] <= 'z' ||
            inputString[i] >= 'A' && inputString[i] <= 'Z' ||
            inputString[i] >= '0' && inputString[i] <= '9' ||
            inputString[i] === '_'))
            return false;
    }
    if (inputString[0] >= '0' && inputString[0] <= '9')
        return false;
    return true;
}

/*
 Given the string, check if it is a palindrome.
 For inputString = "aabaa", the output should be:
 checkPalindrome(inputString) = true;
 For inputString = "abac", the output should be:
 checkPalindrome(inputString) = false;
 */
function isPalindrome(inputString)
{
    const size = inputString.length;
    if(0 === size) {
        return false;
    }
    if(1 === size) {
        return true;
    }
    let i = 0;
    let j = size - 1;
    while (i < j) {
        if(inputString[i] !== inputString[j]) {
            return false;
        }
        ++i;
        --j;
    }
    return true;
}

/*
 Given an array of integers, find the pair of adjacent elements,
 that has the largest product and return that product.
 For inputArray = [3, 6, -2, -5, 7, 3], the output should be:
 adjacentElementsProduct(inputArray) = 21.
 */
function adjacentElementsProduct(inputArray)
{
    const size = inputArray.length;
    if(size < 2) {
        return NaN;
    }
    let max = inputArray[0] * inputArray[1];
    for(let i = 1; i < size - 1; ++i) {
        if(inputArray[i] * inputArray[i + 1] > max) {
            max = inputArray[i] * inputArray[i + 1];
        }
    }
    return max;
}
/*
 Given two strings, find the number of common characters between them.
 For s1 = "aabcc" and s2 = "adcaa", the output should be:
 commonCharacterCount(s1, s2) = 3.
 Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function commonCharactersCount(str1, str2)
{
    let count = 0;
    let size1 = str1.length;
    let size2 = str2.length;
    for(let i = 0; i < size1; ++i) {
        for(let j = 0; j < size2; ++j) {
            if(str1[i] === str2[j]) {
                str2 = str2.replace(str2[j], "");
                --size2;
                ++count;
                break;
            }
        }
    }
    return count;
}

/*
 Ticket numbers usually consist of an even number of digits.
 A ticket number is considered lucky if the sum of the first half of the digits
 is equal to the sum of the second half.
 Given a ticket number n, determine if it's lucky or not.
 For n = 1230, the output should be:
 isLucky(n) = true;
 For n = 239017, the output should be:
 isLucky(n) = false.
 */
function isLucky(num) {
    let str = num.toString();
    let size = str.length;
    let halfSize = size / 2;
    let left = 0;
    let right = 0;
    for(let i = 0; i < halfSize; ++i) {
        left += Number(str[i]);
    }
    for(let i = halfSize; i < size; ++i) {
        right += Number(str[i]);
    }
    return left === right;
}

console.log("checking palindrome");
console.log(isPalindrome("dcfwerc"))
console.log(isPalindrome("aaagdvdgaaa"));
console.log("---------");
console.log("checking variable name");
console.log(variableName("var_1__Int"));
console.log(variableName("qq-q"));
console.log("---------");
console.log("checking common characters' count");
console.log(commonCharactersCount("aaab", "acdb"));
console.log(commonCharactersCount("aabcc", "adcaa"));
console.log("---------");
console.log("checking lucky number");
console.log(isLucky(1230));
console.log(isLucky(239017));
console.log("---------");
console.log("checking adjacent elements' product");
console.log(adjacentElementsProduct([]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));