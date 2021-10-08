export class Vehiculo  {
    constructor(
        public id:number,
        public marca:string,
        public modelo:string,
        public year:number,
        public precio:number,
        public color:string,
        public tipo:string,
        public nimpuesto?:number,
        public impuesto?:number,
        public total?:number,
        public estado?:string,
    ){

    }

    calcularImpuesto(){
        this.impuesto = this.precio + (this.precio * (0.465));
    }

    establecerEstado(){
        if ( this.numeroRamdon() == 1 ) {
            this.estado='Ok';
        }
        else{
            this.estado='Averiado'
        }
    }

    numeroRamdon():number {
        let n = Math.floor((Math.random() * 2) + 1)
        console.log(n);
        return n;

    }

}



