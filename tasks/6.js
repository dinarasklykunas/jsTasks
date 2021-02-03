function removeDuplicates(arr) {
    if (!Array.isArray(arr))
        return 'Parameter must be an array'
    return arr.reduce((newArr, elem) => {
        if (newArr.indexOf(elem) < 0)
            newArr.push(elem)
        return newArr
    }, [])
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8, 9, 10, 11]))
console.log(removeDuplicates(['a', 'b', 'a']))
console.log(removeDuplicates('a'))