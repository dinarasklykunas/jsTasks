const wordSearch = (w) => {
    return text.toLowerCase().split(' ').includes(w.toLowerCase()) ? 'exists' : 'doesn\'t exist'
}

let text = "Tai yra 7-oji užduotis Visma įmonėje"

console.log(`Text: ${text}`)
console.log(`Word "Visma" ${wordSearch("Visma")}`)
console.log(`Word "visma" ${wordSearch("visma")}`)
console.log(`Word "įmonė" ${wordSearch("įmonė")}`)