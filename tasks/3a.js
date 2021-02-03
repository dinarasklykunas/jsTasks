function range(x, y) {
    var arr = []

    if (x <= y)
        for (var i = x; i < y; i++)
            arr.push(i)
    else
        for (var i = x; i > y; i--)
            arr.push(i)

    return arr
}

console.log(range(0, 10))
console.log(range(9, -1))