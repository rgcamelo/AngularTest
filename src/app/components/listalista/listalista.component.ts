import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interface/pokemon';

@Component({
  selector: 'app-listalista',
  templateUrl: './listalista.component.html',
  styleUrls: ['./listalista.component.css']
})
export class ListalistaComponent implements OnInit {

  @Input() resultados:Result[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
