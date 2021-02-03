function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        return 'Both parameters must be numbers'
    return x + y
}

function sum(x) {
    return function(y) {
        return add(x, y)
    }
}

console.log(sum(1)(2))
console.log(sum(10)(50))
console.log(sum('a')('b'))