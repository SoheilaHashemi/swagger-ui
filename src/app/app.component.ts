import { Component } from '@angular/core';
import SwaggerUI from 'swagger-ui'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 ngOnInit() {
    debugger
    SwaggerUI({
        domNode: document.getElementById('swagger-ui-item'),
        url: 'assets/pet.json'
      });
}
}
