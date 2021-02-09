class Calculator {
    constructor(value) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value = value
        else
            this.value = 0
    }

    add(number) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value += value
        return this
    }

    subtract(number) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value -= value
        return this
    }

    multiply(number) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value *= value
        return this
    }

    divide(number) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value /= value
        return this
    }
}

let calc = new Calculator(0)
let amount = calc.add(5).multiply(2).add(20).divide(3)

console.log(amount.value)