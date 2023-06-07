import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Listado de personas';
  personas: Persona[] = [new Persona('Juan', 'Perez'), 
  new Persona ('Karla', 'Lara'),
  new Persona('Laura','Juarez')];

  constructor(private logginService: LoggingService){}

  personaAgregada(persona:Persona){
    this.logginService.enviaMensajeAConsola("agregamos al arreglo la nueva persona:" +persona.nombre);
    this.personas.push(persona);
  }
}
