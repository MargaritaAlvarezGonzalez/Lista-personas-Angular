import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent implements OnInit{

  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput:string ='';
  //apellidoInput:string='';
  @ViewChild ('nombreInput') nombreInput:ElementRef;
  @ViewChild ('apellidoInput') apellidoInput:ElementRef;

  constructor(private loggingService: LoggingService){  }

  ngOnInit(){

  }

  onAgregarPersona(){
    let persona1 =new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre:" + persona1.nombre + "y apellido" + persona1.apellido)
    this.personaCreada.emit(persona1);
  }
}
