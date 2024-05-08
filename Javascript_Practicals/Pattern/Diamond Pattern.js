console.log("Hello, World!");

// Upper half of the diamond
for (let j = 0; j <= 5; j++) {
    let pattern = '';
    for (let i = j; i <= 5; i++) {
        pattern += ' ';
    }
    for (let k = 0; k <= j; k++) {
        pattern += '*';
    }
    for (let k = 0; k < j; k++) {
        pattern += '*';
    }
    console.log(pattern);
}

// Lower half of the diamond
for (let j = 0; j <= 5; j++) {
    let pattern = '';
    for (let i = 0; i <= j; i++) {
        pattern += ' ';
    }
    for (let k = j; k <= 5; k++) {
        pattern += '*';
    }
    for (let k = j; k < 5; k++) {
        pattern += '*';
    }
    console.log(pattern);
}
