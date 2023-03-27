"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(a, b, c, s, f, m, p) {
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = s;
        this.codigoPostal = f;
        this.poblacion = m;
        this.provincia = p;
    }
    Direccion.prototype.getcalle = function () {
        return this.calle;
    };
    Direccion.prototype.setcalle = function (calleNueva) {
        this.calle = calleNueva;
    };
    Direccion.prototype.getnumero = function () {
        return this.numero;
    };
    Direccion.prototype.setnumero = function (numeroNuevo) {
        this.numero = numeroNuevo;
    };
    Direccion.prototype.getpiso = function () {
        return this.piso;
    };
    Direccion.prototype.setpiso = function (pisoNuevo) {
        this.piso = pisoNuevo;
    };
    Direccion.prototype.getletra = function () {
        return this.letra;
    };
    Direccion.prototype.setletra = function (letraNueva) {
        this.letra = letraNueva;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this.codigoPostal;
    };
    Direccion.prototype.setCodigoPostal = function (codigoPostalNuevo) {
        this.codigoPostal = codigoPostalNuevo;
    };
    Direccion.prototype.getPoblación = function () {
        return this.poblacion;
    };
    Direccion.prototype.setpoblacion = function (poblacionNueva) {
        this.poblacion = poblacionNueva;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (provinciaNueva) {
        this.provincia = provinciaNueva;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
