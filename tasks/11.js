function sum(arr) {
    if (!Array.isArray(arr)) return 'Parameter must be an array'
    return arr.reduce((total, curr) => Array.isArray(curr) ? 
        total + sum(curr) : isNaN(total + parseFloat(curr)) ?
            0 : total + parseFloat(curr), 0)
}

console.log(sum([10, 6, [4, 8], 3, [6, 5, [9]]]))
console.log(sum([10, 6, [1, 3]]))
console.log(sum(10))
console.log(sum([1, ['a', 'b'], '2.99']))
console.log(sum([[1], 1.5]))