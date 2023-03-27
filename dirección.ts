export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;
    constructor (a: string, b: number, c:number, s:string, f: number, m: string, p:string) {
        this.calle = a; 
        this.numero = b;
        this.piso = c;
        this.letra = s;
        this.codigoPostal = f;
        this.poblacion =m;
        this.provincia = p;
    }
    public getcalle(): string{
        return this.calle;
    }

    public setcalle(calleNueva: string){
        this.calle = calleNueva;
    }

    public getnumero(): number{
        return this.numero;
    }

    public setnumero(numeroNuevo: number){
        this.numero = numeroNuevo;
    }
    public getpiso(): number{
        return this.piso;
    }

    public setpiso(pisoNuevo: number){
        this.piso = pisoNuevo;
    }

    public getletra(): string{
        return this.letra;
    }

    public setletra(letraNueva: string){
        this.letra = letraNueva;
    }

    public getCodigoPostal(): number{
        return this.codigoPostal;
    }

    public setCodigoPostal(codigoPostalNuevo: number){
        this.codigoPostal = codigoPostalNuevo;
    }
    
    public getPoblación(): string{
        return this.poblacion;
    }

    public setpoblacion(poblacionNueva: string){
        this.poblacion = poblacionNueva;
    }

    public getProvincia(): string{
        return this.provincia;
    }

    public setProvincia(provinciaNueva: string){
        this.provincia = provinciaNueva;
    }
}