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

/*function playVid() {
    const vid = document.createElement("video");
    vid.src = "assets/its_me.mp4"
    vid.id = "vid";
    vid.width = 240;
    vid.height = 320;
    vid.muted = true;
    vid.autoplay = true;
    vid.controls = true;
    document.getElementById('imgArea').appendChild(vid);

}*/

function playRick() {
    const vid = document.createElement("iframe");
    vid.width = "560"; 
    vid.height = "315"; 
    vid.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    vid.id = "vid"; 
    vid.title = "YouTube video player"; 
    vid.frameborder = "0"; 
    vid.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"; 
    vid.allowFullscreen = true;
    document.getElementById('imgArea').appendChild(vid);
}

