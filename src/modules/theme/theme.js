import clickTheme from './clickThemeUtils'
import loadThemeFromLocalStorage from './loadThemeFormLocalStorage'

class Theme {
	constructor(options) {
		this.title = options.title;
		this.output = options.output;
		this.img = options.img;
		this.body = options.body;
	}

	click() {
		clickTheme(this.title, this.output, this.img, this.body)
	}

	loadTheme() {
		loadThemeFromLocalStorage.call(this)
	}

}

export default Theme;