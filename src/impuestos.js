export default class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }

    get getMontoBrutoAnual() {
        return this._montoBrutoAnual
    }
    get getDeducciones() {
        return this._deducciones
    }

    set setMontoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual
    }
    set setDeducciones(deducciones) {
        this._deducciones = deducciones
    }
}