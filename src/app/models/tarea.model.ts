export interface TareaIf {
    nombre: string;
    isCompleted: boolean;
}

export class TareaModel implements TareaIf {

    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false) {
    }
}
