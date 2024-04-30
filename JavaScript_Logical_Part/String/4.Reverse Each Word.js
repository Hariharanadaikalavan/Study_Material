let name = "hi i am ramya";

var splited = name.split(" ");
var reversedWords = "";

for (var j = 0; j < splited.length; j++) {
    var unit = splited[j];
    var emp = "";

    for (var i = unit.length - 1; i >= 0; i--) {
        emp += unit[i];
    }

    reversedWords += emp + " ";
}

console.log(reversedWords.trim());
