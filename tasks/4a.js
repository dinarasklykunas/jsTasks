function sum(numbers) {
    var sum = 0

    if (!Array.isArray(numbers) || !numbers.every(elem => typeof elem === 'number'))
        return 'Argument must be an array of numbers'

    for (var i = 0; i < numbers.length; i++)
        sum += numbers[i]

    return sum
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sum([1, 2, 3]))
console.log(sum(['a', 'b', 'c']))
console.log(sum('a'))