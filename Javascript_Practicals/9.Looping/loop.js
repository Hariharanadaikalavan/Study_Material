var arr = [1, 2, 3, "hari", "haran"];
var found = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        found = true;
        continue; // Skip the rest of the code in the loop and move to the next iteration
    }

    if (found) {
        console.log(arr[i]);
    }
}
