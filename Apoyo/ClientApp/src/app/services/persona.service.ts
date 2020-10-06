import { Injectable } from '@angular/core';
import { Persona } from '../Apoyo/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  
  constructor() { }

  get(): Persona[] {
    let personas = JSON.parse(localStorage.getItem('Personas'));
    return personas;
  }
  
  post(persona: Persona) {
    let personas = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('Personas', JSON.stringify(personas));
  }

  validarExistencia(persona: Persona){
    let personas: Persona[] = [];
    let i: number;
    if (this.get() != null) {
      personas = this.get();
      for ( i = 0; i < personas.length; i++){
        if(personas[i].identificacion === persona.identificacion){
          return true;
        }
      }
    }
    return false;
  }
}
