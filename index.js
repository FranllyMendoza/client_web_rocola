"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var cancionesList = document.getElementById('canciones');
var listasDeReproduccionList = document.getElementById('listasDeReproduccion');
if (cancionesList) {
    axios_1.default.get('http://localhost:3000/canciones')
        .then(function (response) {
        var canciones = response.data;
        canciones.forEach(function (cancion) {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.innerText = cancion.title;
            link.href = "#";
            link.addEventListener('click', function () {
                agregarAListaDeReproduccion(cancion);
            });
            li.appendChild(link);
            cancionesList.appendChild(li);
        });
    });
}
function agregarAListaDeReproduccion(cancion) {
    axios_1.default.post('http://localhost:3000/ListadeReproduccion', {
        title: cancion.title,
        artista: cancion.artista,
        ruta: cancion.ruta
    })
        .then(function () {
        console.log('Cancion agregada a la lista de reproduccion');
    })
        .catch(function (error) {
        console.error(error);
    });
}
