class Calculator {
  constructor(){
    this.num1Input = document.getElementById('num1')
    this.num2Input = document.getElementById('num2')
    this.calculateBtn = document.getElementById('calculateBtn')
    this.operation = document.getElementById('operation')
    this.result = document.getElementById('result')

    this.calculateBtn.addEventListener('click', () => this.compute())
  }

  add(num1, num2){
    const sum = num1 + num2
    this.result.textContent = sum
  }

  subtract(num1, num2){
    const difference = num1 - num2
    this.result.textContent = difference
  }

  multiply(num1, num2){
    const product = num1 * num2
    this.result.textContent = product
  }

  divide(num1, num2){
    if(num2 === 0){
      this.result.textContent = 'Cannot divide by zero.'
      return
    }
    const quotient = num1 / num2
    this.result.textContent = quotient
  }

  compute(){
    const num1 = Number(this.num1Input.value)
    const num2 = Number(this.num2Input.value)
    switch(this.operation.value){
      case 'add':
        this.add(num1, num2)
        break
      case 'subtract':
        this.subtract(num1, num2)
        break
      case 'multiply':
        this.multiply(num1, num2)
        break
      case 'divide':
        this.divide(num1, num2)
        break
      default:
        this.result.textContent = 'Invalid operation'
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator()
})
