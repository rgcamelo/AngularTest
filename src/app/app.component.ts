import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cont=0;
  title = 'primeraApp';

  aumentar(){
    this.cont++;
  }

  disminuir(){
    this.cont--;
  }
}
