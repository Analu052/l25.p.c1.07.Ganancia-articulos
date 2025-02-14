export default class Cl_articulo{
    constructor(c,cT,pV){
        this.codigo=c;
        this.costo=cT;
        this.precioV=pV;
    }

    setCod(c){
        this.codigo=c;
    }
    getCod(){
        return this.codigo;
    }
    setCosto(cT){
        this.costo=cT;
    }
    getCosto(){
        return this.costo;
    }
    setPrecioV(pV){
        this.precioV=pV;
    }
    getPrecioV(){
        return this.precioV;
    }
}