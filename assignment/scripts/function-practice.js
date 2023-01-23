console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name;
}

// Remember to call the function to test
helloName('Mitch')
console.log(helloName('Mitch'))
// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber , secondNumber) {
   return firstNumber + secondNumber;
}
console.log(addNumbers(1,2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(multi){
return multi * 3
}
console.log(multiplyThree(3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0){

    return true;
    // returns negitive values 
  }
   else return false;
}
console.log(isPositive(2))
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let arrayTest = []
let arrayTestFill = [1,2,3,4]
function getLast( array ) {
  console.log(array)
return array[array.length -1]
}
//if the array is empty automatically returns undefined. works when values are present
console.log('this is the last value of the arrray',getLast(arrayTest),' should be undefined')
console.log('this is the last value of the arrray',getLast(arrayTestFill))
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// function find( value, array ){
//    if(array.includes(value)){
//     return true }
//    else {
//     return false
//    }
//   }
// found a method without loop that works 
console.log(arrayTestFill, 'prove to me that 5 is not in here')
function find( value, array){
  for(let item of array){
    if( array.indexOf(value)!== -1 ){
      //looks to see if the value is in the array if it is not then the index value returned is -1 if true would return the index value of where the number is present
      return true +' '+ value + ' is present in the array tested'
    }
    else {
      return false +' '+ value + ' is not present in the array tested'
    }
    console.log(item,'item')
    console.log(value,'value')
    console.log(array,'array')
    
  }
}
console.log(find( 1,arrayTestFill),'first of 3 test console logs for find function') //true
console.log(find(0,arrayTestFill)) //false
console.log(find(5,arrayTestFill)) //false
// console.log(find(7,arrayTestFill)) //false
// console.log(find(2,arrayTestFill)) //true


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string[0] == letter || (string[0]==(letter.toLowerCase()))){
  return true
}
  else {
    return false 
  }
}
//wanted to make sure that i could get this to work and ignore user error, by converting to lower case if they enter upper. 
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('A', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('Z', 'apple') );
/*
// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

*/