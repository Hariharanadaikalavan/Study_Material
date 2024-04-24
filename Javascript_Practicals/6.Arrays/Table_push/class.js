var itemList = [];

function addition() {
    var newItem = document.getElementById("itemName").value;
    itemList.push(newItem);
    document.getElementById("itemName").value = "";
    updateTable();
}

function updateTable() {
    var tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    var table = "<table><thead><tr><th>Index</th><th>Item</th></tr></thead><tbody>";
    for (var i = 0; i < itemList.length; i++) {
        table += "<tr><td>" + (i + 1) + "</td><td>" + itemList[i] + "</td></tr>";
    }
    table += "</tbody></table>";

    tableContainer.innerHTML = table;
}
