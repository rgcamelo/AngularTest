import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivityObject } from '../../models/activities';

@Component({
  selector: 'app-activites-detalle',
  templateUrl: './activites-detalle.component.html',
  styleUrls: ['./activites-detalle.component.css']
})
export class ActivitesDetalleComponent implements OnInit {

  @Input() activity:ActivityObject;
  @Output() nuevobool:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  evento($event){
    let c:boolean;
    let completed = $event.target.value
    if (completed == 'false' && this.activity.completed == true) {
      c=false;
      this.nuevobool.emit(c);
    }

    if (completed == 'true' && this.activity.completed == false) {
      c=true;
      this.nuevobool.emit(c);
    }


  }

}
