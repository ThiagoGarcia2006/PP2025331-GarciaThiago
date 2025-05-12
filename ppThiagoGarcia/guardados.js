function cargarSeriesGuardadas() {
  const contenedor = document.getElementById('series-guardadas');
  contenedor.innerHTML = '';
  const datos = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
  datos.forEach(dato => {
    const serie = Serie.createFromJsonString(JSON.stringify(dato));
    contenedor.appendChild(serie.createHtmlElement());
  });
}

function ordenarPorNombre() {
  const datos = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
  datos.sort((a, b) => a.name.localeCompare(b.name));
  localStorage.setItem('seriesGuardadas', JSON.stringify(datos));
  cargarSeriesGuardadas();
}

function ordenarPorIdioma() {
  const datos = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
  datos.sort((a, b) => a.language.localeCompare(b.language));
  localStorage.setItem('seriesGuardadas', JSON.stringify(datos));
  cargarSeriesGuardadas();
}

document.addEventListener('DOMContentLoaded', cargarSeriesGuardadas);
