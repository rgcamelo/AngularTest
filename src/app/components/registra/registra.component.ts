import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.css']
})
export class RegistraComponent implements OnInit {

  texto:string;

  constructor() { }

  ngOnInit(): void {
  }

  evento($event){
    console.log($event);
  }

}
