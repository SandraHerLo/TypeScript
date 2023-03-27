import {Direccion} from './dirección';
import {Telefono} from './teléfono';
import {Mail} from './mail';
import { Date } from './date';

export class Persona {
    email = new Mail("hola","mundo");
    telefono = new Telefono ("adios", 3);
    direcciones = new Direccion("Avenida del parque", 5, 3, "b", 1, "Torredonjimeno", "Jaen");
    nombre: string;
    apellidos: string;
    edad: number;
    DNI: string;
    cumple: Date;
    colorFavorito: string;
    sexo: string;
    notas: string;

    constructor (n: string, a: string, e: number, d: string, c: Date, f: string, s: string, m:string, mail: Mail, tel:Telefono, direccion: Direccion) {
        this.nombre = n;
        this.apellidos = a;
        this.edad = e;
        this.DNI = d;
        this.cumple = c;
        this.colorFavorito = f;
        this.sexo = s;
        this.notas = m;
        this.email = mail;
        this.telefono=tel;
        this.direcciones=direccion;
    }
    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(nombreNuevo: string){
        this.nombre = nombreNuevo;
    }

    public getapellidos(): string{
        return this.apellidos;
    }

    public setapellidos(apellidosNuevos: string){
        this.apellidos = apellidosNuevos;
    }

    public getedad(): number{
        return this.edad;
    }

    public setedad(edadNueva: number){
        this.edad = edadNueva;
    }

    public getDNI(): string{
        return this.DNI;
    }

    public setDNI(DNINuevo: string){
        this.DNI = DNINuevo;
    }
    
    public getcumple(): Date{
        return this.cumple;
    }

    public setcumple(CumpleNuevo: Date){
        this.cumple = CumpleNuevo;
    }

    public getColorFavorito(): string{
        return this.colorFavorito;
    }

    public setColorFavorito(ColorFavoritoNuevo: string){
        this.colorFavorito = ColorFavoritoNuevo;
    }

    public getSexo(): string{
        return this.sexo;
    }

    public setSexo(SexoNuevo: string){
        this.sexo = SexoNuevo;
    }

    public getNotas(): string{
        return this.notas;
    }

    public setNotas(NotasNuevas: string){
        this.notas = NotasNuevas;
    }

    public getemail(): Mail{
        return this.email;
    }

    public setEmail(emailNuevo: Mail){
        this.email = emailNuevo;
    }

    public getTelefono(): Telefono{
        return this.telefono;
    }

    public setTelefono(telefonoNuevo: Telefono){
        this.telefono = telefonoNuevo;
    }

    public getDireccion(): Direccion{
        return this.direcciones;
    }

    public setDireccion(direccionNueva: Direccion){
        this.direcciones = direccionNueva;
    }

    public modificarDatos(telefono: Telefono, mail: Mail, direccion: Direccion){
        this.setTelefono(telefono);
        this.setEmail(mail);
        this.setDireccion(direccion);
    }
}
