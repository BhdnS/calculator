import moon from '../../images/theme/moon.svg';
import sun from '../../images/theme/sun.svg';

function clickTheme(title, output, img, body) {
  img.addEventListener('click', () => {
    if (img.classList.contains('sun')) {
      img.classList.remove('sun');
      img.classList.add('moon');
      title.classList.add('white');
      output.classList.add('white');
      body.classList.add('black');
      img.src = moon;

			localStorage.setItem('theme', 'light')
    } else if (img.classList.contains('moon')) {
      img.classList.remove('moon');
      img.classList.add('sun');
      title.classList.remove('white');
      output.classList.remove('white');
      body.classList.remove('black');
      img.src = sun;
			
			localStorage.setItem('theme', 'dark')
    }
  });
}

export default clickTheme;