var collection=[23,"hari",98.6,true]
console.log(collection)


//Push method is used to add the elements in last position
collection.push("hari")


//Lenght should start from 0
console.log(collection.length)
console.log(collection)


//method removes the last element from an array and returns that element. It doesn't take any arguments.
collection.pop()
console.log("pop"+collection)


//method removes the first element from an array and returns that element. It also doesn't take any arguments.
collection.shift()
console.log("shift"+collection)

//unshift is used to add elements in front of array
collection.unshift(5)
console.log(collection)

//splice is used to remove elements from specific indexes
collection.splice(2,0,"javascript")
console.log(collection)

//sort method is applicable for string only
console.log(collection.sort())

var a=[33,9,3,96,67,-1,5,6,8];
console.log(a.sort())


// Reverse method
console.log(a.reverse())
var b=['z','j','y','d','b','x','w'];
console.log(b.sort())
console.log(b[b.length-1])

for(let i=0;i<b.length-1;i++){
    console.log(b[i]);
}

var array1="front end"
var array2="back end"
var array3=array1.concat(array2)
console.log(array3)







