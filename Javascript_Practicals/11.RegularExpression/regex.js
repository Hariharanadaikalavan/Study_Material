// const text="people often write  hello world while hello world programming"  gives the position
// const regex=/hello/
// const result=text.match(regex)
// console.log(result)

// const text="people often write Hello world while hello world programming"  case Sensitive
// const regex=/hello/g
// const result=text.match(regex)
// console.log(result)

// const text="people often write hello world while Hello world programming"  case Insensitive
// const regex=/hello/gi
// const result=text.match(regex)
// console.log(result)

// const text="People often Write hello world while Hello World programming"           Alphabetic order match
// const regex=/[A-Z]/g
// const result=text.match(regex)
// console.log(result)

// const text="People often Write Hello world while hello world Programming"              Ignore the p letter
// const regex=/(?![P])[A-Z]/g
// const result=text.match(regex)
// console.log(result)

// const text="people often 300 write hello world 898 while hello world programming"        finding digits
// const regex=/\d/g
// const result=text.match(regex)
// console.log(result)

// const text="people often 300 write hello world 898 while hello 6 world programming"        group of words
// const regex=/\d+/g
// const result=text.match(regex)
// console.log(result)

// const text="people often 300 write hello world 898 while hello 5 world programming"        Replacing the specific words
// const regex=/\d/g
// const result=text.replace(regex,"&")
// console.log(result)

// const email = "hari.ramu16@gmail.com";
// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
// const result = email.match(regex);
// console.log(result);

// const text="harih"      
// const regex=/[a-z]{5}/g
// const result=text.match(regex)
// console.log(result)

// const text="hari.ramu16@gmail.com"      
// const regex=/[a-zA-Z0-9]+[@][a-z]+[\.][c,o,m]{3}/g
// const result=text.match(regex)
// console.log(result)

// const text="12345"  
// const regex=/[0-9]{5}/g
// const result=text.match(regex)
// console.log(result)

// const text="harih"      
// const regex=/^(?=.*[!@#$%^&*]).{2}$/g
// const result=text.match(regex)
// console.log(result)
