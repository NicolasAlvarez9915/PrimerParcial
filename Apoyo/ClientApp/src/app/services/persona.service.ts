import { Injectable } from '@angular/core';
import { Persona } from '../Apoyo/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[];
  constructor() { }

  get(): Persona[] {
    this.personas = JSON.parse(localStorage.getItem('Personas'));
    return this.personas;
  }
  
  post(persona: Persona) {
    this.personas = [];
    if (this.get() != null) {
      this.personas = this.get();
    }
    this.personas.push(persona);
    localStorage.setItem('Personas', JSON.stringify(this.personas));
  }
}
