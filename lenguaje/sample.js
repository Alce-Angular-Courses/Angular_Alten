const algo =  () => {
    {
        var x = 23
        const y = {user : 'Pepe'}
        y.edad = 23
        console.log(y)
    }
    setTimeout((x=23) => console.log(`  
                Tiempo ${x}
    `), 1000)
    console.log(x)
}

algo()

let aDatos = [1, 2, 3]
let aDatos2 = aDatos.map(item => item * item)



function hacerAsincrono() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('Todo bien')}, 2000)
    })
}

hacerAsincrono()
    .then(
        (response) => {console.log(response)},
        (error) => {console.log(error)})