import Impuesto from './impuestos.js';
import Cliente from './clientes.js';

let impuesto1 = new Impuesto(1830000, 230000)
let impuesto2 = new Impuesto(5546000, 500000)

let cliente1 = new Cliente("Juan Pérez", impuesto1)
let cliente2 = new Cliente("John Smith", impuesto2)

const impuestoCliente1 = cliente1.calcularImpuesto();
document.getElementById('resultado').innerHTML += `<h3>- ${impuestoCliente1}</h3>`;

const impuestoCliente2 = cliente2.calcularImpuesto();
document.getElementById('resultado').innerHTML += `<h3>- ${impuestoCliente2}</h3>`;