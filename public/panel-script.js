const list = document.getElementById("files-container");
const filesForm = document.getElementById("files-form");

fetch('http://localhost:3000/banner')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        console.log(json.message)
        for (let i = 0; i < json.message.length; i++) {
            var item = `<li>${json.message[i].name}
                            <button type="submit" id="delete-button" onclick="deleteButton('${json.message[i].name}','${json.message[i]._id}')">Borrar</button>
                        </li>`;
            list.innerHTML += item;
        }
    });

function deleteButton(name, id) {
    var answer = confirm(`Seguro que deseas borrar ${name}?`);
    console.log(answer);
    if (answer) {
        filesForm.onsubmit = "return true;"
        filesForm.action = `http://localhost:3000/banner/${id}`;
        alert('Borrado Correctamente!');
        window.location.reload(true);
    } else {
        validate();
    }
}

function validate() {
    return false
}