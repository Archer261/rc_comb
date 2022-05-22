/* Variable for button */
var niceTry = document.getElementsByClassName("btn");

/* Adds an image to the page - Event will only work once */
function doThis() {
    //alert("It's working");
    //for (let i = 0; i < 1; i++) {
    var img = document.createElement("img");
    img.src = 'https://i.imgur.com/8nLFCVP.png';
    img.id = "sadFace";
    document.getElementById("imgArea").appendChild(img);
    //niceTry.onclick = "";
}
