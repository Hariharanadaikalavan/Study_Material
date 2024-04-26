var num = 123;
var org = num;
var reversedNumber = 0;
while (org > 0) {
    var remainder = org % 10; // Get the last digit of org
    reversedNumber = reversedNumber * 10 + remainder; // Append the last digit to reversedNumber
    org = Math.floor(org / 10); // Remove the last digit from org
}
console.log(reversedNumber); 

 Output: 321
