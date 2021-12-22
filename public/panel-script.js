const upload = document.getElementById("upload");
const image = document.getElementById("image");
const title = document.getElementById("name");
const fileName = document.getElementById("file-name");
const deleteButton = document.getElementById("delete-button");
const list = document.getElementById("files-container");
// FUTURE -- store fetch inside a variable to be able to call it from windows on load
//function and on submiting a image.

fetch('http://localhost:3000/banner')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log(json.message)
            // temp = json.message;\
        for (let i = 0; i < json.message.length; i++) {
            var item = `<li>${json.message[i].name}
            <button name="${json.message[i]._id}">Borrar</button>
            </li>`;
            list.innerHTML += item;
        }
    });