"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan() {
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Tragos = /** @class */ (function () {
    function Tragos() {
    }
    return Tragos;
}());
exports.Tragos = Tragos;
/**
 * concepto: los atributos son las caracteristicas individuales
 * que difer
 */
/*****************************************/
var bar1 = new Bar('nueva era ', 50);
var bar2 = new Bar('el patio', 200);
console.log(bar1);
console.log(bar2);
