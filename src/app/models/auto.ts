import { Comportamiento } from "../interface/comportamiento";
import { Vehiculo } from "./vehiculo";

export class Auto extends Vehiculo implements Comportamiento{

  constructor(
      public id:number,
      public marca:string,
      public modelo:string,
      public year:number,
      public precio:number,
      public color:string,
      public puertas:number,
      public tipo:string,
      public transmision:string){
      super(id,marca,modelo,year,precio,color,tipo);
  }

  encender(): void {
      if (this.estado == 'Ok') {
          console.log(`La transmicion ${this.transmision} esta lista, ya puede arrancar`);
      }
      else{
          console.log(`Nada no arranca el carro`);
      }

  }
}
