import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.class';
import { FormularioComponent } from '../formulario/formulario.component';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { truncate } from 'node:fs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listaUsuarios:Usuario[] = []

  constructor(
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  crear(){
    const modalRef = this.abrirModal();
    modalRef.componentInstance.nuevoUsuario.subscribe( datos =>{
      if(datos){
        const usuario = datos as Usuario;
        this.listaUsuarios.push(usuario)
      }
    })
  }

  ver(usuario:Usuario){
    const modalRef = this.abrirModal();
    modalRef.componentInstance.usuario = usuario;
    modalRef.componentInstance.tipo = 'ver'
  }

  editar(usuario:Usuario, i:number){
    const modalRef = this.abrirModal();
    modalRef.componentInstance.usuario = usuario;
    modalRef.componentInstance.tipo = 'editar';
    modalRef.componentInstance.emisor.subscribe( datos =>{
      if(datos){
        this.listaUsuarios[i] = datos as Usuario;
      }
    })
  }

  eliminarUsuario(i:number){
    this.abrirAlert(
      '¿Esta seguro que desea eliminar el usuario?',
      'No podra recuperar los datos',
      'question',
      true,
      true).then( result =>{
      if (result.isConfirmed) {
        this.listaUsuarios.splice(i,1);
        this.abrirAlert(
          'Eliminado correctamente',
          'El usuario fue eliminado',
          'success'
        )
      }
    })
  }

  abrirModal():NgbModalRef{
    return this.modal.open(FormularioComponent,{
      backdrop:'static', size:'lg', windowClass:'modal'
    });
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
