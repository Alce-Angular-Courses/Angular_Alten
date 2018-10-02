class Persona {
    /* private name: string;
    public edad: number;
    constructor(name, edad) {
        this.name = name;
        this.edad = edad;
    } */

    constructor(private name: string, public edad: number) {
    }
    saludar() {}
}

interface PersonaIf {
    name: string;
    edad: number;
}

class Alumno extends Persona {
    public curso: any;
    constructor (name, edad, curso) {
        super(name, edad);
        this.curso = curso;
    }
    saludar() {
        super.saludar();
    }
}


class Profesor implements PersonaIf {

    cursos: Array<string>;
    asignaturas: [any];
    alumnos: Array<Alumno>;
    constructor(public name: string, public edad: number) {
    }
}

let p1 = new Alumno('Pepe', true, 'Angular');
console.log(p1);
