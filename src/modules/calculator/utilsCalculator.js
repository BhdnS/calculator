export function addition(add, numOne, numTwo) {
	add.addEventListener('click', () => {
		const result = +numOne.value + +numTwo.value;
		innerResult(result)
	})
}

export function subtraction(sub, numOne, numTwo) {
	sub.addEventListener('click', () => {
		const result = +numOne.value - +numTwo.value;
		innerResult(result)
	})
}

export function multiplication(mult, numOne, numTwo,) {
	mult.addEventListener('click', () => {
		const result = +numOne.value * +numTwo.value;
		innerResult(result)
	})
}

export function separation(divided, numOne, numTwo) {
	divided.addEventListener('click', () => {
		const result = +numOne.value / +numTwo.value;
		innerResult(result)
	})
}

export function innerResult(result) {
	output.innerHTML = `<p>${result}</p>`
}