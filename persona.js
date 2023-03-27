"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var direcci_n_1 = require("./direcci\u00F3n");
var tel_fono_1 = require("./tel\u00E9fono");
var mail_1 = require("./mail");
var Persona = /** @class */ (function () {
    function Persona(n, a, e, d, c, f, s, m, mail, tel, direccion) {
        this.email = new mail_1.Mail("hola", "mundo");
        this.telefono = new tel_fono_1.Telefono("adios", 3);
        this.direcciones = new direcci_n_1.Direccion("Avenida del parque", 5, 3, "b", 1, "Torredonjimeno", "Jaen");
        this.nombre = n;
        this.apellidos = a;
        this.edad = e;
        this.DNI = d;
        this.cumple = c;
        this.colorFavorito = f;
        this.sexo = s;
        this.notas = m;
        this.email = mail;
        this.telefono = tel;
        this.direcciones = direccion;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo;
    };
    Persona.prototype.getapellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setapellidos = function (apellidosNuevos) {
        this.apellidos = apellidosNuevos;
    };
    Persona.prototype.getedad = function () {
        return this.edad;
    };
    Persona.prototype.setedad = function (edadNueva) {
        this.edad = edadNueva;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.setDNI = function (DNINuevo) {
        this.DNI = DNINuevo;
    };
    Persona.prototype.getcumple = function () {
        return this.cumple;
    };
    Persona.prototype.setcumple = function (CumpleNuevo) {
        this.cumple = CumpleNuevo;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (ColorFavoritoNuevo) {
        this.colorFavorito = ColorFavoritoNuevo;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (SexoNuevo) {
        this.sexo = SexoNuevo;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (NotasNuevas) {
        this.notas = NotasNuevas;
    };
    Persona.prototype.getemail = function () {
        return this.email;
    };
    Persona.prototype.setEmail = function (emailNuevo) {
        this.email = emailNuevo;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefonoNuevo) {
        this.telefono = telefonoNuevo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direcciones;
    };
    Persona.prototype.setDireccion = function (direccionNueva) {
        this.direcciones = direccionNueva;
    };
    Persona.prototype.modificarDatos = function (telefono, mail, direccion) {
        this.setTelefono(telefono);
        this.setEmail(mail);
        this.setDireccion(direccion);
    };
    return Persona;
}());
exports.Persona = Persona;
