import { Component, OnInit } from '@angular/core';
import { UserObject, Users } from 'src/app/interface/user';
import { AlbumsServiceService } from '../../services/albums-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor( private albumService: AlbumsServiceService) { }

  usuarios:UserObject[] = [];

  ngOnInit(): void {
    this.consultarUsuarios();

  }

  consultarUsuarios(){
    this.albumService.getUsers().subscribe( res =>{
      this.usuarios = [...res];
    });
    console.log(this.usuarios);
  }

}
