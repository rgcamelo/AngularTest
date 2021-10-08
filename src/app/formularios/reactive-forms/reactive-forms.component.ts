import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import * as uuid from 'uuid';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  enviado = false;
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private validatorService:ValidatorService
  ) {
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3), this.validatorService.esExcluido]],
      apellido:['',[Validators.required, Validators.minLength(3), this.validatorService.soloNumeros]],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]{3,}@[a-z]{3,}([.]{1}[a-z]{2,}|[.]{1}[a-z]{2,}[.]{1}[a-z]{2,})') ]],
      passwords: this.formBuilder.group({
        password:['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]],
        password2:['',Validators.required],
      }, {validators: this.validatorService.passwordsIguales })
    });

  }

  ngOnInit(): void {
    const myId = uuid.v4();
    console.log(myId);
  }

  guardar(){
    console.log(this.form);
    this.enviado = true;
  }

  get pass1NoValido(){
    return this.form.get('passwords.password')?.dirty && this.form.get('passwords.password')?.hasError('pattern');
    // const pass1 = this.form.get('passwords.password');
    // return pass1?.dirty && pass1?.hasError('pattern');
  }

  get pass2NoValido(){
    return this.form.get('passwords')?.hasError('noIguales')
  }

}
