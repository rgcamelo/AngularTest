import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsServiceService } from 'src/app/services/albums-service.service';
import { ActivityObject } from '../../models/activities';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent implements OnInit {

  id:string;
  activities:ActivityObject[] = [];
  completadas:ActivityObject[] = [];
  ncompletadas:ActivityObject[] = [];
  activitySeleccionada:ActivityObject = new ActivityObject();
  activityModificable:ActivityObject = new ActivityObject();

  constructor(private activeRoute: ActivatedRoute,
    private albumService: AlbumsServiceService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.cargarActividad();
  }

  cargarActividad(){
    this.albumService.getTodos(this.id).subscribe( res =>{
      this.completadas = res.filter( item => item.completed == true);
      this.ncompletadas = res.filter( item => item.completed == false);
      //this.activities = [...res];
    })
  }

  seleccionar(activity:ActivityObject){
    this.activitySeleccionada = activity;

    console.log(this.activitySeleccionada);
  }

  cambiarEstado($event){
    console.log($event);
    this.activitySeleccionada.completed = $event;


    if($event == true){
      let posicion = this.ncompletadas.indexOf(this.activitySeleccionada);
      this.ncompletadas.splice(posicion,1);

      this.completadas.push(this.activitySeleccionada);
    }

    if($event == false){
      let posicion = this.completadas.indexOf(this.activitySeleccionada);
      this.completadas.splice(posicion,1);
      this.ncompletadas.push(this.activitySeleccionada);
    }
  }



}
