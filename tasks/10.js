let myFunction = () => {}

let totalCalls = 0

let spy = fn => {
    return count => {
        for(let i = 0; i < count; i++) {
            fn()
            totalCalls++
        }
    }
}


let spied = spy(myFunction)
spied(2)

console.log(totalCalls)