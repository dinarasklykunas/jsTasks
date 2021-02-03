let colors = require('colors')

let availableColors = [
    colors.red,
    colors.green,
    colors.yellow,
    colors.blue
]
let previousColor = null

for (let i = 1; i <= 7; i++) {
    previousColor = getRandomColor()
    console.log(previousColor("#".repeat(i)))
}

function getRandomColor() {
    let randomColor = availableColors[Math.floor(Math.random() * availableColors.length)]

    if (previousColor && randomColor._styles === previousColor._styles)
        return getRandomColor()

    return randomColor
}