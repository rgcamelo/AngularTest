import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.class';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  texto:string = '';
  titulo:string='Lista';
  listaPersonas: string[] = ['Juan','Pedro','Ana'];
  listaOPersonas: Persona[] = [];
  nombrePersona:string = '';
  apellidoPersona:string = '';
  edadPersona:number=0;

  constructor() {
    console.log('Este es el constructor');
  }

  ngOnInit(): void {
    console.log('Este es el metodo OnInit');
  }

  agregarPersona():void{

    const nuevaPersona = new Persona(this.nombrePersona,this.apellidoPersona,this.edadPersona);
    this.listaOPersonas.push(nuevaPersona);
  }

  evento(eventm, input:string){
    if( input == 'nombre'){
      this.nombrePersona = eventm.target.value;
    }
    if( input == 'apellido'){
      this.apellidoPersona = eventm.target.value;
    }
    if( input == 'edad'){
      this.edadPersona=eventm.target.value;
    }
  }

}
