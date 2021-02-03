var Calculator = function(value) {
    value = parseFloat(value)
    if (!isNaN(value))
        this.value = value
    else
        this.value = 0
}

Calculator.prototype = {
    add: function(value) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value += value
        return this
    },
    subtract: function(value) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value -= value
        return this
    },
    multiply: function(value) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value *= value
        return this
    },
    divide: function(value) {
        value = parseFloat(value)
        if (!isNaN(value))
            this.value /= value
        return this
    }
}

Calculator.prototype.toString = function() {
    return this.value
}

var calc = new Calculator(0)
var amount = calc.add(5).multiply(2).add(20).divide(3)

console.log(amount)