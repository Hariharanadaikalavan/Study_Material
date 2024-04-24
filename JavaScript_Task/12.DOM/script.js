function addItem() {
    var newItem = document.getElementById("itemInput").value;
    if (newItem.trim() === "") {
        alert("Please enter a valid item.");
        return;
    }

    var items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));

    displayItems();
    document.getElementById("itemInput").value = "";
}

function displayItems() {
    var items = JSON.parse(localStorage.getItem("items")) || [];
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });
}

displayItems(); // Initial display of items from local storage
