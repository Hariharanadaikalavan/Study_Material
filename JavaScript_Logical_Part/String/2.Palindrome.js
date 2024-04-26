var Emptyvariable=""
var varname="malayalam"

for(var i=varname.length;i>=0;i--){
   Emptyvariable=Emptyvariable+varname.charAt(i)
}
console.log("The Given String is----------->"+varname)
console.log("The Reversed String----------->"+Emptyvariable)
if(varname==Emptyvariable){
    console.log(" The Given String is Palindrome")
}else{
    console.log("Not a Palindrome")
}

output:-
  The Given String is Palindrome
