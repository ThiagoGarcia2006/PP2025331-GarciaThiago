let pagina = 1;
const seriesContainer = document.getElementById('series');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.getElementById('siguiente');

async function cargarSeries() {
  seriesContainer.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const id = (pagina - 1) * 6 + i + 1;
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await response.json();
    const serie = new Serie(data.id, data.url, data.name, data.language, data.genres, data.image.medium);
    seriesContainer.appendChild(serie.createHtmlElement());
  }
}

function paginaSiguiente() {
  pagina++;
  cargarSeries();
}

function paginaAnterior() {
  if (pagina > 1) {
    pagina--;
    cargarSeries();
  }
}

btnSiguiente.addEventListener('click', paginaSiguiente);
btnAnterior.addEventListener('click', paginaAnterior);

document.addEventListener('DOMContentLoaded', cargarSeries);
