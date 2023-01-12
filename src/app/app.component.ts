import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
form: FormGroup<any>;
persona: any;
Email: any;
Clave: any;
onEnviar($event: any) {
throw new Error('Method not implemented.');
}
  title = 'angtjgl';
}
