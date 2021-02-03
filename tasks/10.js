let myFunction = () => {}

let report = {
    totalCalls: 0,
    getReport: function() {
        return {
            totalCalls: this.totalCalls
        }
    }
}

let spy = fn => {
    return count => {
        for(let i = 0; i < count; i++) {
            fn()
            report.totalCalls++
        }
    }
}


let spied = spy(myFunction)
spied(2)

console.log(report.getReport())