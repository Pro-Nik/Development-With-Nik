// console.log("Hello javascript")

meraname = "Guddu Bhaiya";
// age = 22;
price = 23.4;
radius = 24;
x = null;
y = undefined;
isFollow = false;
// console.log(y);
// console.log(isFollow)

// javascript is dynamically typed : variable type is not required

// Variable rules
/*
1. variable names are case sensetive: a and A is different.
2. only letters, digits,underscore not even space is allowed
3. only a letter, unnderscore or $ shouldd be 1st character
4. Reserved words cant be variable names
*/

/*
var = variable can be  re-declared and updated. A global scope variable

let = variable cannot be re-declared but can be updated. A block scope variable

const = variable cant be re-declared or updated. A block scope variable.

*/

let fullName = "Nik";

fullName = "Nik Rao"  // Update is allowed
console.log(fullName);

const age = 22;
// age = 25; // cant update const error
console.log(age)

let a;
console.log(a)  // undefined

// const b;
const b = 10
console.log(b)  // error


// global and local scope

// local scope
{
   let x = 5;
   console.log(x)
}

{
    let x = 50;
    console.log(x)
 }