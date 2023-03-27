export class Date {
    dia: number;
    mes: number;
    year: number

    constructor (descripcionDia:number, descripcionMes:number, descripcionYear: number) {
        this.dia = descripcionDia;
        this.mes = descripcionMes;
        this.year = descripcionYear
    }

    public getDia(): number{
        return this.dia;
    }

    public setDia(diaNuevo: number){
        this.dia = diaNuevo;
    }

    public getMes(): number{
        return this.mes;
    }

    public setMes(mesNuevo: number){
        this.mes = mesNuevo;
    }

    public getYear(): number{
        return this.year;
    }

    public setYear(yearNuevo: number){
        this.year = yearNuevo;
    }
}