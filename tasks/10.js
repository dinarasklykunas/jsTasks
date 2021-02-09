let myFunction = (arg) => {
    console.log(`myFunction argument: ${arg}`)
}

let spy = fn => {
    totalCalls = 0

    let wrapped = (arg) => {
        fn(arg)
        totalCalls++
    }

    wrapped.report = () => {
        return { totalCalls: totalCalls }
    }
    
    return wrapped
}

let spied = spy(myFunction)
spied(1)
spied('argument')

console.log(spied.report())