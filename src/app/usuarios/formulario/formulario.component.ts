import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../models/usuario.class';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() nuevoUsuario = new EventEmitter<Usuario>();
  @Input() usuario: Usuario = new Usuario(' ', ' ', ' ');
  @Input() tipo:string = 'crear';
  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private activeModal:NgbActiveModal,
  ) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    console.log(this.usuario);
    this.iniciarForm();
  }

  submit(){
    if (this.form.invalid) {
      this.abrirAlert('Error!','Formulario incompleto','error');
      return
    }
    const values = this.form.value;
    const usuario = values as Usuario;
    this.nuevoUsuario.emit(usuario);
    this.activeModal.dismiss();
    this.abrirAlert('Guardado correctamente','El usuario ha sido guardado','success')
  }

  iniciarForm(){
    this.form = this.formBuilder.group({
      nombre: [ {value:this.usuario?.nombre, disabled: this.tipo === 'ver'},[ Validators.required, Validators.minLength(3)] ],
      apellido: [{ value:this.usuario?.apellido, disabled: this.tipo === 'ver'},[Validators.required, Validators.minLength(3)]],
      email: [ {value:this.usuario?.email, disabled: this.tipo === 'ver'},[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]]
    });
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }

  abrirAlert(title:string,text:string,icono:SweetAlertIcon,cancelButton:boolean=false,confirmButton:boolean=false){
    return Swal.fire({
      title:title,
      text:text,
      showCancelButton: cancelButton,
      showConfirmButton: confirmButton,
      icon:icono
    })
  }


}
