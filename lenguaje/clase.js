class Persona {
    constructor(name, edad) {
        this.name = name
        this.edad = edad
    }
}

class Alumno extends Persona {
    constructor (name, edad, curso) {
        super(name, edad)
        this.curso = curso
    }

    saludar() {console.log(`Hola, soy ${this.name}`)}

    

    saludarAsinc() {
        setTimeout(this.saludar.bind(this), 1000)
    }
}

let p1 = new Alumno('Pepe', 32, 'Angular')
p1.profesion = 'Programador'
console.log(p1)

p1.saludarAsinc()