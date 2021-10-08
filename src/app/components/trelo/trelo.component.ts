import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../models/actividad';

@Component({
  selector: 'app-trelo',
  templateUrl: './trelo.component.html',
  styleUrls: ['./trelo.component.css']
})
export class TreloComponent implements OnInit {


  titulo:string = '';
  descripcion:string = '';
  estado:string = 'Pendiente';
  actividadSeleccionada:Actividad = new Actividad('','','');
  actividadEditar:Actividad = new Actividad('','','');
  totalactividades:number = 0;

  pendientes:Actividad[] = [];
  enproceso:Actividad[] = [];
  terminadas:Actividad[] = [];
  canceladas:Actividad[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  guardar(donde:string,actividad?:Actividad){

    if (donde == 'pendientes') {
      if (actividad) {
        actividad.estado='Pendiente'
        this.pendientes.push(actividad);
      }else{
        let actividad:Actividad = new Actividad(this.actividadSeleccionada.titulo,this.actividadSeleccionada.descripcion,this.estado);
        this.pendientes.push(actividad);
      }

    }

    if (donde == 'enproceso') {
      actividad.estado='En proceso';
      this.enproceso.push(actividad);
    }

    if (donde == 'terminadas') {
      actividad.estado='Terminada';
      this.terminadas.push(actividad);
    }

    if (donde == 'canceladas') {
      actividad.estado='Cancelada';
      this.canceladas.push(actividad);
    }


    console.log("Pendientes",this.pendientes);
    console.log("EnProceso",this.enproceso);
  }

  cambiar(event,type:string){
    if(type == 'titulo'){
      this.actividadSeleccionada.titulo= event.target.value;
    }

    if( type == 'descripcion'){
      this.actividadSeleccionada.descripcion = event.target.value;
    }
  }

  movimientos(de:string,adonde:string,actividad:Actividad){

    if ( de =='pendientes') {
      let posicion = this.pendientes.indexOf(actividad);
      this.guardar(adonde,actividad);
      this.pendientes.splice(posicion,1);
    }

    if ( de =='enproceso') {
      let posicion = this.enproceso.indexOf(actividad);
      this.guardar(adonde,actividad);
      this.enproceso.splice(posicion,1);
    }

    if ( de =='terminadas') {
      let posicion = this.terminadas.indexOf(actividad);
      this.guardar(adonde,actividad);
      this.terminadas.splice(posicion,1);
    }

    if ( de =='canceladas') {
      let posicion = this.canceladas.indexOf(actividad);
      this.guardar(adonde,actividad);
      this.canceladas.splice(posicion,1);
    }
  }

  cambiarestado(de:string,actividad:Actividad,event){

    console.log(event.target.value);

    if (event.target.value == 'En proceso') {
      this.movimientos(de,'enproceso',actividad);
    }

    if (event.target.value == 'Pendientes') {
      this.movimientos(de,'pendientes',actividad);
    }

    if (event.target.value == 'Terminada') {
      this.movimientos(de,'terminadas',actividad);
    }

    if (event.target.value == 'Cancelada') {
      this.movimientos(de,'canceladas',actividad);
    }
  }

  seleccionar(actividad:Actividad){
    console.log("click",actividad);
    //this.actividadSeleccionada = actividad;
    this.actividadSeleccionada = {...actividad};
  }

  editar(actividad:Actividad){
    this.actividadSeleccionada = actividad;
    //this.limpiar();
  }


  limpiar(){
    this.actividadSeleccionada = new Actividad('','','');
  }

  minimizar(actividad:Actividad){
    actividad.min = !actividad.min
  }

}
