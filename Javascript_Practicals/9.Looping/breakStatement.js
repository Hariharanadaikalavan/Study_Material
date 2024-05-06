var arr=[1,2,3,4,5,6,7,8,9,10]
for (var i = 1; i <= arr.length; i++) {
    if (i === 7) {
        break; // This will exit the loop when i equals 3
    }
    console.log("i =", i);
}
console.log("Loop ended");

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // This will skip the rest of the code inside the loop for i equals 3
    }
    console.log("i =", i);
}
console.log("Loop ended");

