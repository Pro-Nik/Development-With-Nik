// Ques print even no till 100
/*
let i =0;
while (i<=100) {
    if (i%2==0) {
        console.log(i)
    }
    i++;
}
    */

// Ques: guess correct no
let password = 35;

let ans= prompt("Enter expected answer:")

while(password != ans){
   ans =  prompt("Incorrect Password")

}
console.log("Password cracked!!")