import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../models/persona.class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() persona:string = 'Por defecto';
  @Input() texto:string='Por defecto';
  @Input() personna:Persona = new Persona('','',0);
  constructor() { }

  ngOnInit(): void {
  }

}
