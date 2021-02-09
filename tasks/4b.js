const sum = (numbers) => {
    if (!Array.isArray(numbers) || !numbers.every(elem => typeof elem === 'number'))
        return 'Argument must be an array of numbers'
    return numbers.reduce((total, current) => total + current)
}


console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sum([1, 2, 3]))
console.log(sum(['a', 'b', 'c']))
console.log(sum('a'))