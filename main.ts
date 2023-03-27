import {Persona} from './persona';
import {Direccion} from './dirección';
import {Telefono} from './teléfono';
import {Mail} from './mail';
import { Date } from './date';

//CREACION DE DIFERENTES EMAILS
let mail1=new Mail("gmail","prueba@gmail.com");
let mail2=new Mail("outlook","mail@outlook.com");
let mail3=new Mail("hotmail","ejemplo@hotmail.com");
//CREACION DE DIFERENTES TELEFONOS
let telefono1 = new Telefono("samsung", 630655699);
let telefono2 = new Telefono("samsung", 690257732);
let telefono3 = new Telefono("samsung", 627681530);
//CREACION DE DIFERENTES DIRECCIONES
let direccion1 = new Direccion("Velazquez", 53, 3, "c", 23650, "Torredonjimeno", "Jaen");
let direccion2 = new Direccion("Alcala Galiano", 26, 2, "a", 23650, "Torredonjimeno", "Jaen");
let direccion3 = new Direccion("San Antonio", 27, 5, "j", 23650, "Torredonjimeno", "Jaen");
//CREACION DE DIFERENTES FECHAS
let fecha1 = new Date(21, 2,1996);
let fecha2 = new Date(1, 11, 1997);
let fecha3 = new Date(12, 2, 1939);
//CREACION DE DIFERENTES PERSONAS
let persona1 = new Persona("nombre","apellido",25,"11222333B",fecha1,"colorfavorito","sexo","notas",mail1,telefono1,direccion1);
let persona2=new Persona ("nombre", "apellido", 27, "55666777C", fecha2, "colorFavorito", "sexo", "notas", mail2, telefono2, direccion2);
let persona3=new Persona ("nombre", "apellido", 23, "88999000H", fecha3, "colorFavorito", "sexo", "notas", mail3, telefono3, direccion3);

//VECTOR PARA GUARDAR LAS DIFERENTES PERSONAS CREADAS
var arrayPersonas:Persona[]=[persona1,persona2,persona3];
var i;
var contador=0;

//DNIs PARA HACER UNA BÚSQUEDA
var dniBusqueda1:string = "12345678A";
var dniBusqueda2:string = "11222333B";

//PARAMETROS PARA MODIFICAR UNA PERSONA
let mail4=new Mail("yahoo","modificacion@yahoo.com");
let telefono4 = new Telefono("xiaomi", 666778899);
let direccion4 = new Direccion("Santa Maria", 38, 2, "H", 23650, "Torredonjimeno", "Jaen");

console.log("----------------------- APLICACION TYPESCRIPT -----------------------");
console.log("---------------------------------------------------------------------");
console.log("Procedemos a buscar este DNI "+ dniBusqueda1 + " para modificar los datos");
console.log("---------------------------------------------------------------------");

for(i=0;i<arrayPersonas.length;i++){
    if(dniBusqueda1.valueOf == arrayPersonas[i].getDNI){
        arrayPersonas[i].modificarDatos(telefono4,mail4,direccion4);
    }else{
        contador++;
    }

    if(contador==arrayPersonas.length){
        console.log("No existe persona con el DNI introducido");
    }
}
console.log("---------------------------------------------------------------------");
console.log("----------------------- DATOS PERSONA 1 -----------------------");
console.log("DNI: " + arrayPersonas[0].getDNI());
console.log("Direccion -> Calle: " + arrayPersonas[0].getDireccion().getcalle() + " Numero: " + arrayPersonas[0].getDireccion().getnumero());
console.log("Telefono-> Numero: " + arrayPersonas[0].getTelefono().getnumero() + " Marca: " + arrayPersonas[0].getTelefono().getTipo());
console.log("Email: " + arrayPersonas[0].getemail().getNombreDireccion() + " Tipo: " + arrayPersonas[0].getemail().getTipo());
console.log("---------------------------------------------------------------------");
console.log("Procedemos a buscar este DNI "+ dniBusqueda2 + " para modificar los datos");
console.log("---------------------------------------------------------------------");

contador=0;

for(i=0;i<arrayPersonas.length;i++){
    if(dniBusqueda2 == arrayPersonas[i].getDNI()){
        arrayPersonas[i].modificarDatos(telefono4,mail4,direccion4);
    }else{
        contador++;
    }

    if(contador==arrayPersonas.length){
        console.log("No existe persona con el DNI introducido");
    }
}


console.log("----------------------- DATOS PERSONA 1 MODIFICADA -----------------------");
console.log("DNI: " + arrayPersonas[0].getDNI());
console.log("Direccion -> Calle: " + arrayPersonas[0].getDireccion().getcalle() + " Numero: " + arrayPersonas[0].getDireccion().getnumero());
console.log("Telefono-> Numero: " + arrayPersonas[0].getTelefono().getnumero() + " Marca: " + arrayPersonas[0].getTelefono().getTipo());
console.log("Email: " + arrayPersonas[0].getemail().getNombreDireccion() + " Tipo: " + arrayPersonas[0].getemail().getTipo());
console.log("---------------------------------------------------------------------");
