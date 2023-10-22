export default class Calculator {
  constructor() {
    this.add = document.querySelector('#add');
    this.sub = document.querySelector('#sub');
    this.mult = document.querySelector('#mult');
    this.divided = document.querySelector('#divided');
    this.output = document.querySelector('#output');
    this.numOne = document.querySelector('#num-one');
    this.numTwo = document.querySelector('#num-two');
  }

  addition() {
    this.add.addEventListener('click', () => {
      const result = +this.numOne.value + +this.numTwo.value;
      this.#innerResult(result);
    });
  }

  subtraction() {
    this.sub.addEventListener('click', () => {
      const result = +this.numOne.value - +this.numTwo.value;
      this.#innerResult(result);
    });
  }

  multiplication() {
    this.mult.addEventListener('click', () => {
      const result = +this.numOne.value * +this.numTwo.value;
      this.#innerResult(result);
    });
  }

  separation() {
    this.divided.addEventListener('click', () => {
      const result = +this.numOne.value / +this.numTwo.value;
      this.#innerResult(result);
    });
  }

  #innerResult(result) {
    this.output.innerHTML = `<p>${result}</p>`;
  }
}
