import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  usuario ={
    name:'rafael',
    apellido:'camelo',
    email:'rafa@gmail.com',
    genero:'',
    pais:'',
  }

  paises: any[] =[];

  constructor(private paisService:PaisServiceService) { }

  ngOnInit(): void {
    this.consultarPaises();
  }

  guardar(form:NgForm){
    console.log(form);

    if (form.invalid) {
      //Object.values separa el valor de la key
      Object.values(form.controls).forEach(control =>{
        control.markAsTouched();
      });
    }
  }

  consultarPaises(){
    this.paisService.consultarPaises().subscribe( res =>{
      this.paises = res;
    })
  }

}
