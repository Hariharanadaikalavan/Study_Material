function clock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    console.log()
    console.clear()
    console.log(hours + ":" + minutes + ":" + seconds);
}


// while(true)
clock() 
 setInterval(clock, 1000);