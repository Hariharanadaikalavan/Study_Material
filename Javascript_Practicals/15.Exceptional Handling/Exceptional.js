

//   alert("welcome")
// function divide(x, y) {
//     if (y === 0) {
//         throw new Error('Division by zero');
//     }
//     return x / y;
// }

// try {
//     var result = divide(10, 0);
//     console.log('Result:', result);
// } catch (error) {
//     console.log('An error occurred:', error.message);
// }

var invalidJsonString = '{ "name": "John", "age" "city": "New York" }';

try {
    var parsedJson = JSON.parse(invalidJsonString);
    console.log('Parsed JSON:', parsedJson);
} catch (error) {
    console.log('Error parsing JSON:', error.message);
}

