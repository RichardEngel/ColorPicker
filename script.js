const colors = ["Red", "Aqua", "Black", "Blue", "Fuchsia", "Gray", "Green", "Lime", "Maroon", "Navy", "Olive", "Purple",
                "Silver", "Teal", "White", "Yellow"];

function colorChangerBtn(){
    let randomNumber = Math.floor(Math.random() * colors.length);
    document.getElementById("colorID").innerHTML = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
}