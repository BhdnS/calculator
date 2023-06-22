import { Calculator } from './calculator'

const dataCalculator = new Calculator({
	add: document.querySelector('#add'),
	sub: document.querySelector('#sub'),
	mult: document.querySelector('#mult'),
	divided: document.querySelector('#divided'),
	output: document.querySelector('#output'),
	numOne: document.querySelector('#num-one'),
	numTwo: document.querySelector('#num-two'),	
})

dataCalculator.addition();
dataCalculator.subtraction();
dataCalculator.multiplication();
dataCalculator.separation();