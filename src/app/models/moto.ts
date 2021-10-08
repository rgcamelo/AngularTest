import { Comportamiento } from "../interface/comportamiento";
import { Vehiculo } from "./vehiculo";

export class Moto extends Vehiculo implements Comportamiento{

  constructor(public marca:string,
    public id:number,

      public modelo:string,
      public year:number,
      public precio:number,
      public color:string,
      public cc:number,
      public tipo:string,
      ){
      super(id,marca,modelo,year,precio,color,tipo);
  }

  encender(): void {
      if (this.estado == 'Ok') {
          console.log(`El cc ${this.cc} esta listo, ya puede arrancar`);
      }else{
          console.log(`Nada no arranca la moto`);
      }

  }

}
