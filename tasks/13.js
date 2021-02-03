function say(a) {
    return function(b) {
        return concatSpeach(a, b)
    }
}

function concatSpeach(a, b) {
    return a + b
}

console.log(say("Hello, ")("it's me"))