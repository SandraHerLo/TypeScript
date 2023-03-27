"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direcci_n_1 = require("./direcci\u00F3n");
var tel_fono_1 = require("./tel\u00E9fono");
var mail_1 = require("./mail");
var date_1 = require("./date");
//CREACION DE DIFERENTES EMAILS
var mail1 = new mail_1.Mail("gmail", "prueba@gmail.com");
var mail2 = new mail_1.Mail("outlook", "mail@outlook.com");
var mail3 = new mail_1.Mail("hotmail", "ejemplo@hotmail.com");
//CREACION DE DIFERENTES TELEFONOS
var telefono1 = new tel_fono_1.Telefono("samsung", 630655699);
var telefono2 = new tel_fono_1.Telefono("samsung", 690257732);
var telefono3 = new tel_fono_1.Telefono("samsung", 627681530);
//CREACION DE DIFERENTES DIRECCIONES
var direccion1 = new direcci_n_1.Direccion("Velazquez", 53, 3, "c", 23650, "Torredonjimeno", "Jaen");
var direccion2 = new direcci_n_1.Direccion("Alcala Galiano", 26, 2, "a", 23650, "Torredonjimeno", "Jaen");
var direccion3 = new direcci_n_1.Direccion("San Antonio", 27, 5, "j", 23650, "Torredonjimeno", "Jaen");
//CREACION DE DIFERENTES FECHAS
var fecha1 = new date_1.Date(21, 2, 1996);
var fecha2 = new date_1.Date(1, 11, 1997);
var fecha3 = new date_1.Date(12, 2, 1939);
//CREACION DE DIFERENTES PERSONAS
var persona1 = new persona_1.Persona("nombre", "apellido", 25, "11222333B", fecha1, "colorfavorito", "sexo", "notas", mail1, telefono1, direccion1);
var persona2 = new persona_1.Persona("nombre", "apellido", 27, "55666777C", fecha2, "colorFavorito", "sexo", "notas", mail2, telefono2, direccion2);
var persona3 = new persona_1.Persona("nombre", "apellido", 23, "88999000H", fecha3, "colorFavorito", "sexo", "notas", mail3, telefono3, direccion3);
//VECTOR PARA GUARDAR LAS DIFERENTES PERSONAS CREADAS
var arrayPersonas = [persona1, persona2, persona3];
var i;
var contador = 0;
//DNIs PARA HACER UNA BÚSQUEDA
var dniBusqueda1 = "12345678A";
var dniBusqueda2 = "11222333B";
//PARAMETROS PARA MODIFICAR UNA PERSONA
var mail4 = new mail_1.Mail("yahoo", "modificacion@yahoo.com");
var telefono4 = new tel_fono_1.Telefono("xiaomi", 666778899);
var direccion4 = new direcci_n_1.Direccion("Santa Maria", 38, 2, "H", 23650, "Torredonjimeno", "Jaen");
console.log("----------------------- APLICACION TYPESCRIPT -----------------------");
console.log("---------------------------------------------------------------------");
console.log("Procedemos a buscar este DNI " + dniBusqueda1 + " para modificar los datos");
console.log("---------------------------------------------------------------------");
for (i = 0; i < arrayPersonas.length; i++) {
    if (dniBusqueda1.valueOf == arrayPersonas[i].getDNI) {
        arrayPersonas[i].modificarDatos(telefono4, mail4, direccion4);
    }
    else {
        contador++;
    }
    if (contador == arrayPersonas.length) {
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
console.log("Procedemos a buscar este DNI " + dniBusqueda2 + " para modificar los datos");
console.log("---------------------------------------------------------------------");
contador = 0;
for (i = 0; i < arrayPersonas.length; i++) {
    if (dniBusqueda2 == arrayPersonas[i].getDNI()) {
        arrayPersonas[i].modificarDatos(telefono4, mail4, direccion4);
    }
    else {
        contador++;
    }
    if (contador == arrayPersonas.length) {
        console.log("No existe persona con el DNI introducido");
    }
}
console.log("----------------------- DATOS PERSONA 1 MODIFICADA -----------------------");
console.log("DNI: " + arrayPersonas[0].getDNI());
console.log("Direccion -> Calle: " + arrayPersonas[0].getDireccion().getcalle() + " Numero: " + arrayPersonas[0].getDireccion().getnumero());
console.log("Telefono-> Numero: " + arrayPersonas[0].getTelefono().getnumero() + " Marca: " + arrayPersonas[0].getTelefono().getTipo());
console.log("Email: " + arrayPersonas[0].getemail().getNombreDireccion() + " Tipo: " + arrayPersonas[0].getemail().getTipo());
console.log("---------------------------------------------------------------------");
