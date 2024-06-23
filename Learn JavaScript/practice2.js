// ques 1
// let num = prompt("Enter a number");
// if(num%5==0){
//     console.log(num + " is multiple of 5")
// }
// else{
//     console.log(num + " is not a multiple of 5")
// }

// Ques 2
let score = prompt("Enter the marks(0 to 100) only")
if(score>=90 && score<=100){
    console.log("A")
}
else if(score>=70 && score<=89){
    console.log("B")
}
else if(score>=60 && score<=69){
    console.log("C")
}
else if(score>=50 && score<=59){
    console.log("D")
}
else if(score>=0 && score<=49){
    console.log("F")
}
else{
    console.log("Out of range")
}