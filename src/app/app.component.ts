import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'contador';
  contador = 0;

 aumentar() {
   this.contador = this.contador + 1;
 }
diminuir() {
  this.contador = this.contador - 1;
}

}