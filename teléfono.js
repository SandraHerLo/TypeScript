"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(descripciontipo, descripcionnumero) {
        this.tipo = descripciontipo;
        this.numero = descripcionnumero;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipoNuevo) {
        this.tipo = tipoNuevo;
    };
    Telefono.prototype.getnumero = function () {
        return this.numero;
    };
    Telefono.prototype.setnumero = function (numeroNuevo) {
        this.numero = numeroNuevo;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
