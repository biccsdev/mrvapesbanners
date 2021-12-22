const upload = document.getElementById("upload");
const image = document.getElementById("image");
const title = document.getElementById("name");
const fileName = document.getElementById("file-name");
const deleteButton = document.getElementById("delete-button");
const list = document.getElementById("files-container");

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