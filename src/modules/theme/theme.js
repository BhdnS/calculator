import moon from '../../images/theme/moon.svg';
import sun from '../../images/theme/sun.svg';

class Theme {
  constructor() {
    this.title = document.querySelector('.title');
    this.output = document.querySelector('#output');
    this.img = document.querySelector('.sun');
    this.body = document.querySelector('body');
  }

  click() {
    this.img.addEventListener('click', () => {
      if (this.img.classList.contains('sun')) {
        this.#sunStiles();
        localStorage.setItem('theme', 'light');
      } else if (this.img.classList.contains('moon')) {
        this.#moonStiles();
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.#moonStiles();
    } else {
      this.#sunStiles();
    }
  }

  #sunStiles() {
    this.img.classList.remove('sun');
    this.img.classList.add('moon');
    this.title.classList.add('white');
    this.output.classList.add('white');
    this.body.classList.add('black');
    this.img.src = moon;
  }

  #moonStiles() {
    this.img.classList.remove('moon');
    this.img.classList.add('sun');
    this.title.classList.remove('white');
    this.output.classList.remove('white');
    this.body.classList.remove('black');
    this.img.src = sun;
  }
}

export default Theme;
