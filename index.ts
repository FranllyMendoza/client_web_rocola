import axios from 'axios';

const cancionesList = document.getElementById('canciones');
const listasDeReproduccionList = document.getElementById('listasDeReproduccion');

if (cancionesList) {
  axios.get('http://localhost:3000/canciones')
    .then(response => {
      const canciones = response.data;

      canciones.forEach((cancion: any) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.innerText = cancion.title;
        link.href = "#";
        link.addEventListener('click', () => {
          agregarAListaDeReproduccion(cancion);
        });
        li.appendChild(link);
        cancionesList.appendChild(li);
      });
    });
}

function agregarAListaDeReproduccion(cancion: any) {
  axios.post('http://localhost:3000/ListadeReproduccion', {
    title: cancion.title,
    artista: cancion.artista,
    ruta: cancion.ruta
  })
    .then(() => {
      console.log('Cancion agregada a la lista de reproduccion');
    })
    .catch(error => {
      console.error(error);
    });
}
