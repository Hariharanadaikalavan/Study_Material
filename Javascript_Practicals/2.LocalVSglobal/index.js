
let petName;
function myfunction() {
    let petName = "Sizzer"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; // local variable
    console.log(petName);
}
console.log(petName);
myfunction();
anotherFunc();