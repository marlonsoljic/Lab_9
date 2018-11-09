//This will output when the page loads
document.write("Output Zero Here");

//This will output when a button is pressed
function output3() {
    var x = document.getElementById("output3");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
