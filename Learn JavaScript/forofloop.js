// Use for string and array
/*
let str = "NitishKumar"

let count =0;
for (const i of str) {  // iterator
    console.log(i);
    count++;
}
console.log("No. of letters: " + count)

*/
// for-in use for objects

let profile = {
    username : "@nikrao",
    isFollow : false,
    followers : 2000,
    following : 100,
};

for (const key in profile) {
   console.log(key + ": "+ profile[key])
   
}

