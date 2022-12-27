import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  name: any = 'John Doe';
  x:number = 0;
  y:number = 0;


  inputDesdeHijo(event: any) {
    console.log('El hijo me envio esto '+event);
    this.name = event;
  }
}


