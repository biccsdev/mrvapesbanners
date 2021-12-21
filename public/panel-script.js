const upload = document.getElementById("upload");
const image = document.getElementById("image");
const title = document.getElementById("name");
const fileName = document.getElementById("file-name");
const deleteButton = document.getElementById("delete-button");
const list = document.getElementById("files-container");


// window.onload = function() {
//     var req = new XMLHttpRequest();
//     req.open('GET', document.location, false);
//     req.send(null);
//     var headers = req.getAllResponseHeaders().toLowerCase();
//     var body = req.body();
//     console.log(body);
//     alert(headers);
// }

var temp;

fetch('http://localhost:3000/banner')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log(json.message)
            // temp = json.message;\
        for (let i = 0; i < json.message.length; i++) {
            var item = `<li>${json.message[i].name}<button id="delete-button">Borrar</button></li>`;
            list.innerHTML += item;
        }
    });

deleteButton.addEventListener("click", (e) => {
    console.log('almost there buddy');
});


// function displayImageData(data) {
//     var list = document.getElementById("files-container");
//     for (let i = 0; i < data.length; i++) {
//         var item = `<li>${data[i].name}</li>`;
//         list.innerHTML += item;
//     }
// }


// -- !!DEPRECATED!! --
// upload.addEventListener("click", (e) => {
//     console.log('im in bro');
//     e.preventDefault();
//     var xhr = new XMLHttpRequest({ mozSystem: true });
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             alert(xhr.response);
//         }
//     }
//     xhr.open("POST", 'http://localhost:3000/banner', true);
//     //xhr.setRequestHeader("Accept", "multipart/form-data");
//     //xhr.setRequestHeader('Content-Type', 'multipart/form-data');
//     var fileSent = {
//         "name": title,
//         "file": image
//     };
//     console.log(fileSent);
//     xhr.send(fileSent);
//     alert('Subida exitosa!');
// })


// function retrieve() {
//     console.log('inside');
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             alert(xhr.response);
//         }
//     }
//     xhr.open('get', 'http://localhost:3000/banner', true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     xhr.send();
// }