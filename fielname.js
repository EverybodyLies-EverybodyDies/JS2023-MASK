let checkButton = document.getElementById("check");
checkButton.addEventListener("click", check);

function check() {
    let fielname = document.getElementById("fielname").value;
    let reg = /^[A-Za-z]\w\.(jpg|png|gif)/;
    let result = fielname.match(reg);
alert(document.getElementById("answer").innerHTML = "true");

}

