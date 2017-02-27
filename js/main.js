$(document).ready(function () {

var images = [
    "images/intro/img_1.jpg",
    "images/intro/img_2.jpg",
    "images/intro/img_3.jpg",
    "images/intro/img_4.jpg"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();


});

  

