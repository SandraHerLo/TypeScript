export class Mail {
    tipo: string;
    nombreDireccion: string;

    constructor (descripciontipo:string, descripcionNombreDireccion:string) {
        this.tipo = descripciontipo;
        this.nombreDireccion = descripcionNombreDireccion;
    }

    public getTipo(): string{
        return this.tipo;
    }

    public setTipo(tipoNuevo: string){
        this.tipo = tipoNuevo;
    }

    public getNombreDireccion(): string{
        return this.nombreDireccion;
    }

    public setNombreDireccion(direccionNueva: string){
        this.tipo = direccionNueva;
    }
}