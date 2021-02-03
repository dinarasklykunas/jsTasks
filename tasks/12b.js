class Calculator {
    constructor(value) {
        this.value = value
    }

    add(number) {
        this.value += number
        return this
    }

    subtract(number) {
        this.value -= number
        return this
    }

    multiply(number) {
        this.value *= number
        return this
    }

    divide(number) {
        this.value /= number
        return this
    }
}

let calc = new Calculator(0)
var amount = calc.add(5).multiply(2).add(20).divide(3)

console.log(amount)