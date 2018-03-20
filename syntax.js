//you don't know js - up and going

// operators
// = equal operators perform assignments
a = a + 2
a += 2

// == & === check equality

// values and types
// expressed in a mathematical way
42 / 2;

//strings do input or oput or characters
//first character of the string "42"[0] // "4"
//blue for numbers black for string in dev console.
"42";

a = 42;

a = a / 2;

//explicit coercions
//conversion to string
a = String(a);

//conversion to number
b = Number(a);

console.log(a);

//value has a type not the variable has no type

//implicit coercions
//+ string concatenation, where it will make a into a string but it's not obvious
a = a + ""

//const - unchangeable variable
//var - changeable variable

//Variables
//assigning to a variable that isn't formally declared
// best practice is to formally declare var a = 42;
// let puts it inside of a block, var puts it inside of function
var a = 42;
let b = 2;
const c = 42;
function a() {};

//block
// a pairing of curly braces, with statements inside of them

// attaching a block to an if statement, will only get executed in the context of the statement
var a = 42;

if ( a > 10) {
  a = 10;
  foo(a/ 2);
}

var c;

//and a while statement
var a = 42;

while ( a > 10) {
  a = 10;
  foo(a/ 2);
}

var c;

//function declaration
function foo() {}
//function expressions attached to a variable declation
var bar = function(){

}
var bar = function baz() {}

//conditionals
var a = 10;

if (a > 5) {
   a = a * 2;
}

//conversion
//falsy values, 0, -0, NaN "", false, null, undefined
//void 42 - will get undefined anything after
//truthy
var a = 10;

if (a) {
  a = a * 2
}
//falsy
var a = 0;

if (a) {
  a = a * 2
}

//loops
// 1 initialization clause
// 2 test/ conditional clause
// 3 update clause
// a loop runs till something is false
for ( a = 5; a < 10; a++ ) {
  console.log(a);
}

//conceptionally how the loop works
a = 5;
while (true) {
  if (a >= 10) {
    break;
  }
  console.log(a);
  a = a + 1;
}

//function
var a = 10;
function foo() {
  a = a * 2;
  a = a + 3;
}

foo();

console.log(a);

foo();
foo();

console.log(a);

// declaring parameters
//accessible inside the function
function foo(b) {
  a = a * 2;
  a = a + b;

}

a = 10;
//calling an argument
foo(100);

console.log(a);


function foo(b) {
  a = a * 2;
  a = a + b;
  return a / 2;

}

var a = 10
var b = foo(3);

console.log(a); // 23
console.log(b);


//scoped
//if a variable is inside a function, it cannot be accessed outside the function

function foo(b) {
  var c = 42;
  a = a * 2;
  a = a + b;
  return a / 2;

}

//starts function foo can't find a goes to the next scope to find an a and we can access it

var a = 10
//b exisits only inside the function
console.log(b);
console.log(c);

//
// * Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// * After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// * Finally, check the amount against your bank account balance to see if you can afford it or not.
// * You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// * You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// * **Bonus Challenge:** Try to incorporate input into this program, perhaps with the `prompt(..)` covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
//
// OK, go ahead. Try it. Don't peek at my code listing until you've given it a shot yourself!
