const range = (x, y) => {
    let arr = []

    if (x <= y)
        for (let i = x; i < y; i++)
            arr.push(i)
    else
        for (let i = x; i > y; i--)
            arr.push(i)

    return arr
}

console.log(range(0, 10))
console.log(range(9, -1))