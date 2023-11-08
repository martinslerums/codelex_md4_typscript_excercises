import $ from 'jquery';
import sum from './utils/sum/sum';

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const summa = (x: number, y: number):number => x + y;



// Write a function that takes a value as argument
// Return the type of the value

const valueTypeOf = (value: any): string => {
    return typeof value
}



// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

const areEqual = (a: any, b: any): boolean => a === b



// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const charCounter = (a: string, b: number): string => {
    return a[b - 1]
}



// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeThree = (a: string): string => {
    return a.slice(3)
}



// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const lastThree = (a: string): string => {
    return a.slice(-3)
}



// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const firstThree = (a: string): string => {
    return a.slice(0, 3)
}



// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result


const halfString = (a: string): string => {
    return a.slice(0, a.length / 2);
}



// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const removeLastThree = (a: string): string => {
    return a.slice(0, a.length-3)
}



// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentOfA = (a: number, b: number): number => {
    return a / 100 * b;
}



// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const crazyMath = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return a + b - c * d / e ** f;
}
// console.log(crazyMath(6,5,4,3,2,1))


// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

const isEven = (a: number): boolean => {
    return a % 2 === 0;
}



// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const stringCount = (a: string, b: string): number => {
    let count = 0;
    for (let i = 0; i <= b.length; i++) {
        if (a === b[i]) {
            count ++
        }
    }
    return count;
}



// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const isWhole = (a: number): boolean => {
    return a % 1 === 0;
}



// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

const mathFunction = (a: number, b: number): number => {
    return a < b ? a / b : a * b;
}



// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

const ifContains = (a: string, b: string): string => {
    return a.includes(b) ? b + a : a + b;
}



// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

const roundSecond = (a: number): number => {
    return parseFloat(a.toFixed(2));
}

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

const numberToArray = (a: number): number[] => {
    return a.toString().split('').map(Number);
}



// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

const someStrings = (a: string, b: string): string => {
    const clearA = a.replace(/[^a-zA-Z]/g, '').toLowerCase().charAt(0).toUpperCase() + a.replace(/[^a-zA-Z]/g, '').slice(1);
    const clearB = b.replace(/[^a-zA-Z]/g, '').split("").reverse().join("");
    return clearA + clearB;
}



// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

const primeNumber = (a: number): number => {
    for(let i = 2; i < a ; i++) { 
        if(a % i === 0) {
            return primeNumber(a + 1)
        }
    }
    return a;
}



// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

const isDivisible = (a: number, b: number): number => {
    if (a % b === 0) {
        return a;
    } else {
        return Math.ceil(a / b) * b;
    }
}


// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

const insertThird = (a: string, b: string): string => {
    const reverse = a.split("").reverse();
    for (let i = 2; i < reverse.length; i += 4) {
        reverse.splice(i + 1, 0, b);
    }
    return reverse.reverse().join("");
}



// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

const revealWord = (a: string): string => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = a.split('');
    
    for (let i = 0; i < letters.length; i++) {
        const currentLetter = letters[i];
        const currentIndex = alphabet.indexOf(currentLetter);
        
        if (currentIndex !== -1) {
            const nextIndex = (currentIndex + 1) % alphabet.length;
            letters[i] = alphabet[nextIndex];
        }
    }
    return letters.join('');
}



// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

const nthElement = (a: any[], b: number): any => {
    return a[b-1];
}



// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

const removeFirstThreeArray = (a: any []): any [] => {
    return a.slice(3)
}



// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

const removeLastThreeArray = (a: any []): any [] => {
    return a.slice(-3)
}



// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

const getFirstThreeArray = (a: any []): any [] => {
    return a.slice(0, 3)
}



// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

const lastNArray = (a: any [], b: number): any [] => {
    return a.slice(-b)
}



// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

const cleanOccurrences = (a: any[], b: any): any[] => {
    return a.filter(element => element !== b);
}



// Write a function that takes an array (a) as argument
// Return the number of elements in a

const arrayCount = (a: any[]): number => {
    return a.length;
}



// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

const negativeCount = (a: number []): number => {
    const negativeNumbers = a.filter(number => number < 0);
    return negativeNumbers.length;
}



// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

const descendingOrder = (a: number []): number [] => {
    return a.sort((a, b) => b - a);
}



// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

const stringsAlphabetically = (a: string []): string [] => {
    return a.sort();
}



// Write a function that takes an array of numbers as argument
// It should return the average of the numbers


const arrayAvarage = (a: number []): number => {
    const sum = a.reduce((acc, i) => acc + i);
    const average = sum / a.length;
    return average;
} 



// Write a function that takes an array of strings as argument
// Return the longest string

const longestString = (a: string []): string => {
    const longestString = a.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
    return longestString;
}



// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

const allAreEqual = (a: any[]): boolean => {
    const compareingTo = a[0];
    const allEqual = a.every(element => element === compareingTo);
    return allEqual;
}



// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

const concatanateArrays = (...a: any[]): any [] => {
    return [].concat(...a);
}



// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

const sortObjectAscendingB = (a: any []): any [] => {
    const sortedArray = a.sort((a, b) => a.b - b.b);
    return sortedArray;
}



// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

const arrayFunctionOne = (a: number [], b: number []): number [] => {
    const mergedArray = a.concat(b);
    const uniqueArray = mergedArray.filter((value, index, array) => array.indexOf(value) === index);
    const sortedArray = uniqueArray.sort((a, b) => a - b);
    return sortedArray;
    
}



// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

const sumArrayGreater = (a: number [], b: number): number => {
    let sum = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] > b){
            sum += a[i]
        }
    }
    return sum;
}



// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

const rangeNumberSum = (min: number, max: number): number [] => {
    let range: number[] = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}



// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

const sortStringsByLetter = (wordArray: string []) => {
    const groupedStrings: { [key: string]: string[] } = {};

    wordArray.forEach((word) => {
        const firstLetter = word[0].toLowerCase();
        if (!groupedStrings[firstLetter]) {
            groupedStrings[firstLetter] = [];
        }
        groupedStrings[firstLetter].push(word);
    });
    return groupedStrings;
}



// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array



const functionOne =  (b: number, ...array: any[]): any[] => {
    const firstElement = b >= 6 ? b : 0;
    const newArray = [firstElement, ...array];
    return newArray.flat();
}



// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array



const nthArrayElement = (a: number[], n: number): number [] => {
    let newArray: number [] = [];
    for (let i = n - 1; i < a.length; i += n) {
        newArray.push(a[i]);
      }
    return newArray   
}



// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
interface Object {
    continent: string,
    country: string
}
const countryProperty = (object: Object): string => {
    if ('country' in object) {
        return object.country
    }
}



// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

interface Object2 {
    [key: string]: any;
}
const squareBracketAccessor = (object: Object2): any => {
    return object['prop-2']
}



// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

const stringProperty = (object: Object2, str: string) => {
    if(str in object){
        return object[str]
    }
}



// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

const propertyWithKey = (a: Object2, b: string): boolean => {
    return b in a;
}



// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

const createObject = (a: string): {key: string} => {
    const object: {key: string} = {key: a}
    return object;
}



// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

const createObject2 = (a: string [], b: string []): { [a: string]: string } => {
    const object: { [a: string]: string } = {};
    for(let i = 0; i < a.length; i++){
        object[a[i]] = b[i];
    }
    return object;
}



// Write a function that takes an object (a) as argument
// Return an array with all object keys

const objectKeyArray = (object: Object2): string [] => {
    return Object.keys(object);
}



// Write a function that takes an object (a) as argument
// Return the sum of all object values

const objectValueSum = (object: Object2): string [] => {
    return Object.values(object).reduce((a, b) => a + b)
}



// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'


function removeObjectProperty(object: Object2): Object2 {
    const newObject: Object2 = {};
  
    for (const key in object) {
      if (key !== 'b') {
        newObject[key] = object[key];
      }
    }  
    return newObject;
}



// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

const objectMerger = (objectOne: Object2, objectTwo: Object2): Object2 => {
   
    // const { b, ...restObjectTwo } = objectTwo; => shorthard for:
    const restObjectTwo: Object2 = {};
    for (const key in objectTwo) {
        if (key !== 'b') {
          restObjectTwo[key] = objectTwo[key];
        }
      }
    
    const mergedObject: Object2 = {
    ...objectOne,
    ...restObjectTwo,
    d: objectTwo.b
    };
    return mergedObject;
}



// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

const multiplyObject = (object: Object2, b: number): Object2 => {
    const multipliedObject: Object2 = {}
    for(const key in object) {
        multipliedObject[key] = object[key] * b
    }
    return multipliedObject
}



// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object


const whiteToNull = (object: Object2): Object2 => {
    for (const key in object) {
        const noWhiteSpaces = object[key].trim();
        if (noWhiteSpaces === '') {
            object[key] = null;
        }
    }
    return object;
}



// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

const someHardObject = (object: Object2): Object2 => {
    const { fn, ln, size, weight } = object;

    // const fn = object.fn;
    // const ln = object.ln;
    // const size = object.size;
    // const weight = object.weight;

    const interestingProperties: Object2 = {
        fn,
        ln,
    };

    if (size !== undefined) {
        interestingProperties.size = `${size}cm`;
    }

    if (weight !== undefined) {
        interestingProperties.weight = `${weight}kg`;
    }

    return interestingProperties;
}



// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array


const arrayStringObject = (objectArray: Object2 [], str: string): Object2 [] => {
    
    const updatedObjects: Object2[] = objectArray.map(
        obj => {
            const newObject: Object2 = { ...obj };
            newObject.continent = str;
            return newObject;
        });
    return updatedObjects;
}



// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

const numberArrayObject = (numbers: number []): Object2 => {
    const occurancesObject: Object2 = {};

    numbers.forEach(number => {
        if (occurancesObject[number]) {
            occurancesObject[number]++;
        } else {
            occurancesObject[number] = 1;
        }
    });
    return occurancesObject;
}



// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

const compareDates = (dateOne: Date, dateTwo: Date): boolean => {
    return dateOne.getTime() === dateTwo.getTime()
}



// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

const differenceDates = (dateOne: Date, dateTwo: Date): number => {
    const milliseconds = Math.abs(dateTwo.getTime() - dateOne.getTime());
    const days = Math.round(milliseconds/((24 * 60 * 60 * 1000)));
    return days
}



// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

const sameDay = (dateOne: Date, dateTwo: Date): boolean => {

    if(dateOne.getFullYear() === dateTwo.getFullYear() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getDate() === dateTwo.getDate()) {
        return true
    }
    return false
    
}



// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

const contactArrays = (a: number [], b: number []): number [] => {
    const abArray: number [] = [...a].concat([...b]);
    return abArray;
}



// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

const pushArray = (a: string [], b: string ): string [] => {
    const updatedArray: string [] = [...a];
    updatedArray.push(b)
    return updatedArray;
}



// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

const firstArray = (a: string [], b: string ): string [] => {
    const updatedArray: string [] = [...a];
    updatedArray.unshift(b);
    return updatedArray
}



// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

const MergeObjectTogether = (objectOne: Object2, objectTwo: Object2): Object2 => {
    const mergedObject = {...objectOne, ...objectTwo}
    return mergedObject
}



// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

const favoriteMovie = (object: Object2, str: string): Object2 => {
    const updatedObject = {...object}
    updatedObject.favoriteMovie = str
    return updatedObject
}

console.log(favoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'))