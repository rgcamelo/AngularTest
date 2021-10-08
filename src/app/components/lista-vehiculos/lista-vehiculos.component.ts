import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';
import { vehiculos } from '../../data/vehiculos';
import { Comportamiento } from '../../interface/comportamiento';
import { Auto } from '../../models/auto';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

  vehiculos;
  listaVehiculos:Vehiculo[] = [];
  listaVehiculos2:Vehiculo[] =[];

  constructor() { }

  ngOnInit(): void {
    this.cargarlista();
    this.listaVehiculos2 = [...this.listaVehiculos];
  }

  cargarlista(){
    vehiculos.forEach( (vehiculo,index) => {

      if (vehiculo.transmision) {
          let carro:Auto = new Auto(
              index,vehiculo.marca,vehiculo.modelo,vehiculo.year,vehiculo.precio,vehiculo.color,vehiculo.puertas,'auto',vehiculo.transmision
          );
          carro.establecerEstado();
          this.listaVehiculos.push(carro);
      }

      if (vehiculo.cc) {
          let moto:Moto = new Moto(
          vehiculo.marca,index,vehiculo.modelo,vehiculo.year,vehiculo.precio,vehiculo.color,vehiculo.cc,'moto'
          );
          moto.establecerEstado();
          this.listaVehiculos.push(moto);
      }
  });
  }

  eliminarElemento(id:string){
    this.listaVehiculos2.splice(parseInt(id),1);
    this.clon();
  }

  clon(){
    this.listaVehiculos = this.listaVehiculos2;
  }

  encenderElemento(vehiculo:Vehiculo){
    console.log(`${vehiculo.marca} ${vehiculo.modelo} Encendido`);
  }

  filtro(tipo:string){
    if(tipo == 'todo'){
      this.clon();
    }
    else{
      this.listaVehiculos = this.listaVehiculos2.filter( el => el.tipo == tipo);
    }

  }

}
