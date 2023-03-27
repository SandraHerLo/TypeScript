export class Telefono {
    tipo: string;
    numero: number;
    constructor (descripciontipo:string, descripcionnumero:number) {
        this.tipo = descripciontipo;
        this.numero = descripcionnumero;
    }
    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(tipoNuevo: string){
        this.tipo = tipoNuevo;
    }

    public getnumero(): number{
        return this.numero;
    }

    public setnumero(numeroNuevo: number){
        this.numero = numeroNuevo;
    }
}