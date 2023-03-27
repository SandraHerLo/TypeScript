"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
var Date = /** @class */ (function () {
    function Date(descripcionDia, descripcionMes, descripcionYear) {
        this.dia = descripcionDia;
        this.mes = descripcionMes;
        this.year = descripcionYear;
    }
    Date.prototype.getDia = function () {
        return this.dia;
    };
    Date.prototype.setDia = function (diaNuevo) {
        this.dia = diaNuevo;
    };
    Date.prototype.getMes = function () {
        return this.mes;
    };
    Date.prototype.setMes = function (mesNuevo) {
        this.mes = mesNuevo;
    };
    Date.prototype.getYear = function () {
        return this.year;
    };
    Date.prototype.setYear = function (yearNuevo) {
        this.year = yearNuevo;
    };
    return Date;
}());
exports.Date = Date;
