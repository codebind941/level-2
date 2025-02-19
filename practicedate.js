function datemethod() {
    const date = new Date()
    console.log(date)
    console.log(date.getDate())
    console.log(date.getMonth())
    console.log(date.getFullYear())
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getHours(), date.getMinutes(), date.getSeconds())
    console.log(date.setFullYear(2022))
    console.log(date.setMonth(5))
    console.log(date.getTime())
    
}

let newdate = new Date(27-4-2004)
console.log(newdate)
datemethod()

