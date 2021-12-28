const bannersContainer = document.getElementById("banners-container");
const slides = document.getElementById("mySlides");

fetch('http://localhost:3000/banner')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log(json.message)
        for (let i = 0; i < json.message.length; i++) {
            //Recieve image url from api
            var image = `<img id="image-container" class="mySlides" src="${json.message[i].url}">`;
            bannersContainer.innerHTML += image;
        }
        carousel();
    });


var slideIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 30000); // Change image every 30000 seconds
}