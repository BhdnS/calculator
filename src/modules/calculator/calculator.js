import { addition, multiplication, separation, subtraction } from './utilsCalculator'

export class Calculator {
	constructor(options) {
		this.add = options.add;
		this.sub = options.sub;
		this.mult = options.mult;
		this.divided = options.divided;
		this.output = options.output;
		this.numOne = options.numOne;
		this.numTwo = options.numTwo;
	}

	addition() { addition(this.add, this.numOne, this.numTwo) }

	subtraction() { subtraction(this.sub, this.numOne, this.numTwo) }

	multiplication() { multiplication(this.mult, this.numOne, this.numTwo) }

	separation() { separation(this.divided, this.numOne, this.numTwo) }

}