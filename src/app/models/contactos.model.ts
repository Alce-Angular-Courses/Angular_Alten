export interface ContactoIF {
    nombre: string;
    apellidos: string;
    email: string;
    isOk: boolean;
    turno: string;
    curso: {content: string, code: string};
}

export class ContactoModel implements ContactoIF {
    constructor (
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: string = '',
        public curso: {content: string, code: string} = {content: '', code: ''}
    ) {}
}
