class Serie {
  constructor(id, url, name, language, genres, image) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.language = language;
    this.genres = genres;
    this.image = image;
  }

  toJsonString() {
    return JSON.stringify(this);
  }

  static createFromJsonString(json) {
    const obj = JSON.parse(json);
    return new Serie(obj.id, obj.url, obj.name, obj.language, obj.genres, obj.image);
  }

  createHtmlElement() {
    const card = document.createElement('div');
    card.className = 'serie-card';

    const title = document.createElement('h4');
    title.textContent = this.name;

    const lang = document.createElement('p');
    lang.textContent = `Idioma: ${this.language}`;

    const gen = document.createElement('p');
    gen.textContent = `Géneros: ${this.genres.join(', ')}`;

    const img = document.createElement('img');
    img.src = this.image;
    img.alt = this.name;
    img.addEventListener('click', () => {
      window.open(this.url, '_blank');
    });

    const btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.addEventListener('click', () => Serie.guardarSerie(this));

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(lang);
    card.appendChild(gen);
    card.appendChild(btnGuardar);

    return card;
  }

  static guardarSerie(serie) {
    const guardadas = JSON.parse(localStorage.getItem('seriesGuardadas')) || [];
    guardadas.push(serie);
    localStorage.setItem('seriesGuardadas', JSON.stringify(guardadas));
  }
}
