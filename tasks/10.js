let myFunction = () => {
    console.log("My Function")
}

let spy = fn => {
    let totalCalls = 0

    return count => {
        console.log(`myFunction is being called ${count} times!`)
        for(let i = 0; i < count; i++) {
            fn()
            totalCalls++
        }
    }
}


let spied = spy(myFunction)
spied(2)

// console.log(spied.report())