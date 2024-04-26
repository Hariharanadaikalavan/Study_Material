var num = 12321;
var org = num;
var reversedNumber = 0;
while (org > 0) {
    var remainder = org % 10; // Get the last digit of org
    reversedNumber = reversedNumber * 10 + remainder; // Append the last digit to reversedNumber
    org = Math.floor(org / 10); // Remove the last digit from org
}
console.log(reversedNumber); 
console.log(num)
if(reversedNumber==num){
    console.log("The Number is pandlindrome")
}else{
    console.log("Not a Pandlindrome")
}

output:-

  The Number is Pandlindrome


