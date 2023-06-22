import Theme from './theme'

const theme = new Theme({
	title: document.querySelector('.title'),
	btn: document.querySelectorAll('.btn'),
	input: document.querySelectorAll('.input'),
	output: document.querySelector('#output'),
	img: document.querySelector('.sun'),
	body: document.querySelector('body'),
})

theme.click()
theme.loadTheme()