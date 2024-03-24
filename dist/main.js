"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));
var _clientes = _interopRequireDefault(require("./clientes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuestos["default"](1830000, 230000);
var impuesto2 = new _impuestos["default"](5546000, 500000);
var cliente1 = new _clientes["default"]("Juan Pérez", impuesto1);
var cliente2 = new _clientes["default"]("John Smith", impuesto2);
var impuestoCliente1 = cliente1.calcularImpuesto();
document.getElementById('resultado').innerHTML += "<h3>- ".concat(impuestoCliente1, "</h3>");
var impuestoCliente2 = cliente2.calcularImpuesto();
document.getElementById('resultado').innerHTML += "<h3>- ".concat(impuestoCliente2, "</h3>");