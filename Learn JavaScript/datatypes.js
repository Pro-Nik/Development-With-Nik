/*
Data types
1. Primitive(7) : number, string, boolean, undefined, null, BigInt, symbol 
2. Non-primitive: objects(arays, function etc)

object : collection of values

*/

let x =  "Nik";
let age= 22;
let marks = 98.9;
let y ;
let n = null
let m = false
let z = BigInt("123")
let s = Symbol("!")
/*
console.log(typeof(x))
console.log(typeof(age))
console.log(typeof(marks))
console.log(typeof(y))
console.log(typeof(n))
console.log(typeof(m))
console.log(typeof(z))
console.log(typeof(s))
*/

// object
const student = {
  // key : value
    fullName : "Nik",
    age : 22,
    marks : 89,
    isPass : true,
};

// console.log(student["marks"])
// console.log(student.age)

// *** const ojects can be updated
student.age = student.age +2;
student.fullName = "Nitish Kumar";

console.log(student.fullName)
console.log(student.age)





