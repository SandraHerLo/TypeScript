"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(descripciontipo, descripcionNombreDireccion) {
        this.tipo = descripciontipo;
        this.nombreDireccion = descripcionNombreDireccion;
    }
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipoNuevo) {
        this.tipo = tipoNuevo;
    };
    Mail.prototype.getNombreDireccion = function () {
        return this.nombreDireccion;
    };
    Mail.prototype.setNombreDireccion = function (direccionNueva) {
        this.tipo = direccionNueva;
    };
    return Mail;
}());
exports.Mail = Mail;
