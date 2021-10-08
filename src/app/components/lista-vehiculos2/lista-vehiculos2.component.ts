import { Component, OnInit } from '@angular/core';
import { vehiculos } from 'src/app/data/vehiculos';
import { Comportamiento } from 'src/app/interface/comportamiento';
import { Auto } from 'src/app/models/auto';
import { Moto } from 'src/app/models/moto';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-lista-vehiculos2',
  templateUrl: './lista-vehiculos2.component.html',
  styleUrls: ['./lista-vehiculos2.component.css']
})
export class ListaVehiculos2Component implements OnInit {

  vehiculos;
  listaVehiculos:Comportamiento[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarlista();
    console.log(this.listaVehiculos);
  }

  cargarlista(){
    vehiculos.forEach( (vehiculo,index) => {

      if (vehiculo.transmision) {
          let carro:Auto = new Auto(
              index,vehiculo.marca,vehiculo.modelo,vehiculo.year,vehiculo.precio,vehiculo.color,vehiculo.puertas,vehiculo.transmision,'auto'
          );
          carro.establecerEstado();
          carro.calcularImpuesto();
          this.listaVehiculos.push(carro);
      }

      if (vehiculo.cc) {
          let moto:Moto = new Moto(
          vehiculo.marca,index,vehiculo.modelo,vehiculo.year,vehiculo.precio,vehiculo.color,vehiculo.cc,'moto'
          );
          moto.establecerEstado();
          moto.calcularImpuesto();
          this.listaVehiculos.push(moto);
      }
  });
  }

  evento(event,vehiculo:Vehiculo){
    console.log(vehiculo);
    vehiculo.total = vehiculo.precio + (vehiculo.precio * (event.target.value/100));
  }

}
