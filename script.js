// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: 
let button = document.querySelector('#actionButton'); //querySelector was calling for class actionButton
button.addEventListener('click', eventHandler); 

// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
};

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = 'Updated message';
  console.log(localMessage); //moved console.log inside scope of function
}
updateMessage();
 

// Error 7:
document.getElementById('testButton').addEventListener('click', testFunction()); // testButton Id did not exist. Added a second button with ID testButton to index.html

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: 
let nullVar = null;
console.log(nullVar); //nullVar has no length because its value is null

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar); //caseSensitiveVar was spelled CaseSensitiveVar

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData); // removed '' from importantData so now it displays the string value, rather than a string that says importantData

// Error 12: 
testFunction(); // tryToCallFunction was undefined. Changed to function that has definition.

// Error 13:
let user = { name: 'Alice' }; // 'name' was misspelled.
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber.toString()); // 123 cannot be converted to upper case letters because it is a number.

// Error 15: 
let greeting = 'Hello, world!'; // Nothing wrong with this, but it doesn't do anything other than declare and define a variable. Added console.log
console.log(greeting);

// Error 16: 
let total = 5;
for (let i = 0; i < 5; i++); {
    i = total + 1;
    console.log('Total: ' + i); // i was undefined. Changed to add value to i
}

// Error 17:
let five = '5';
if (five == 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5');} // Added closing bracket to else statement and removed one of the = from 'if (five === 5)'

// Error 18:
// Array.prototype.push = function () {
//   console.log("Array push method is overwritten");
// };
let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
x = 5; // moved this line above console.log so x is now defined
console.log(x);


// Error 20:
let myObj = {property1: 'Hello', property2: 'World'};
console.log(myObj.property1 + ' ' + myObj.property2); // myString was returning as undefined, so instead created an object with property1: Hello and property2: World