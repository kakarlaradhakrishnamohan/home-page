function addItem() {
    let name = document.getElementById("foodName").value;
    let date = document.getElementById("expiryDate").value;

    if (name === "" || date === "") {
        alert("Enter all details");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " - " + date;

    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.className = "deleteBtn";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("foodList").appendChild(li);

    document.getElementById("foodName").value = "";
    document.getElementById("expiryDate").value = "";
}