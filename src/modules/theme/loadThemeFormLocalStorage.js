import moon from '../../images/theme/moon.svg';
import sun from '../../images/theme/sun.svg';

export default function loadThemeFromLocalStorage() {
	const theme = localStorage.getItem('theme');
	if(theme === 'dark') {
		this.img.classList.remove('moon');
		this.img.classList.add('sun');
		this.title.classList.remove('white');
		this.btn.forEach((button) => {
			button.classList.remove('white');
		});
		this.input.forEach((inputElement) => {
			inputElement.classList.remove('white');
		});
		this.output.classList.remove('white');
		this.body.classList.remove('black');
		this.img.src = sun;
	} else {
		this.img.classList.remove('sun');
		this.img.classList.add('moon');
		this.title.classList.add('white');
		this.btn.forEach((button) => {
			button.classList.add('white');
		});
		this.input.forEach((inputElement) => {
			inputElement.classList.add('white');
		});
		this.output.classList.add('white');
		this.body.classList.add('black');
		this.img.src = moon;
	}
}