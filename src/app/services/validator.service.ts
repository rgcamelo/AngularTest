import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

interface ErrorValidacion{
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  esExcluido(control:FormControl):ErrorValidacion | null
  {
    const nombresExcluidos = ['Pedro','Pablo','Jose'];
    const nombre = control.value;
    if (nombresExcluidos.includes(nombre)) {
      return { nombreNoPermitido:true };
    }
    return null;
  }

  soloNumeros(control:FormControl):ErrorValidacion | null {

    const input = control.value;
    if (isNaN(input)) {
      return {noEsUnNumero:true}
    }
    return null;
  }


  passwordsIguales(form:AbstractControl): ErrorValidacion | null{
    if (form.get('password').value !== form.get('password2').value) {
      return {noIguales:true}
    }
    return null;
  }
}
