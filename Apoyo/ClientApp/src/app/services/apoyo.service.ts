import { Injectable } from '@angular/core';
import { Apoyo } from '../Apoyo/models/apoyo';

@Injectable({
  providedIn: 'root'
})
export class ApoyoService {

  apoyos: Apoyo[];
  constructor() { }

  get(): Apoyo[] {
    this.apoyos = [];
    this.apoyos = JSON.parse(localStorage.getItem('Apoyos'));
    return this.apoyos;
  }
  
  post(apoyo: Apoyo) {
    this.apoyos = [];
    if (this.get() != null) {
      this.apoyos = this.get();
    }
    this.apoyos.push(apoyo);
    localStorage.setItem('Apoyos', JSON.stringify(this.apoyos));
  }
}
