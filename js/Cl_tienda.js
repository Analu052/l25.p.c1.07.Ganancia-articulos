export default class Cl_tienda {
    constructor() {
        this.acumC=0;
        this.acumpV=0;
        this.auxCodigo=0;
        this.mayorpV=0;
    }

    procesarVenta(ven) {
        this.acumpV+=ven.precioV;
        this.acumC+=ven.costo;
        if (ven.precioV>this.mayorpV) {
            this.mayorpV=ven.precioV;
            this.auxCodigo=ven.codigo;
        }
    }
    gananciaT() {
        return this.acumpV-this.acumC;
    }
    codM() {
        return this.auxCodigo;
    }

}