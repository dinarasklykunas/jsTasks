function sevenAte9(str) {
    for (let i = 0; i < str.length; i++)
        if (str[i] == 9)
            if (str[i - 1] && str[i - 1] == 7 && str[i + 1] && str[i + 1] == 7)
                str = str.substring(0, i) + str.substring(i + 1, str.length)

    return str
}

console.log(sevenAte9('16556178612178977'))
console.log(sevenAte9('79712312'))
console.log(sevenAte9('79797'))