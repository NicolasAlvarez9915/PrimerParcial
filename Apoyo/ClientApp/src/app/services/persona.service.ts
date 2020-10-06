import { Injectable } from '@angular/core';
import { Persona } from '../Apoyo/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[];
  i: number;
  constructor() { }

  get(): Persona[] {
    this.personas = JSON.parse(localStorage.getItem('Personas'));
    return this.personas;
  }
  
  post(persona: Persona) {
    let personas = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('Personas', JSON.stringify(this.personas));
  }

  validarExistencia(persona: Persona){
    this.personas = [];
    if (this.get() != null) {
      for ( this.i = 0; this.i < this.personas.length; this.i++){
        if(this.personas[this.i].identificacion === persona.identificacion){
          return true;
        }
      }
    }
    return false;
  }
}
