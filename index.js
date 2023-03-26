// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const nombre = 'Efrain Tovar'
const edad = 22;
const esDesarrollador = true;
const fecha = '23-02-2000';
const libroFavorito = {
  titulo: 'Harry Potter',
  autor: 'J. K. Rowling',
  fecha: '21-07-2007',
  url: 'https://es.wikipedia.org/wiki/Harry_Potter',
}

const lista = new Array(nombre,edad,esDesarrollador,fecha,libroFavorito);
console.log(lista);



