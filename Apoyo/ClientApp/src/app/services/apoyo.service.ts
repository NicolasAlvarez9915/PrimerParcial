import { Injectable } from '@angular/core';
import { Apoyo } from '../Apoyo/models/apoyo';
import { Persona } from '../Apoyo/models/persona';

@Injectable({
  providedIn: 'root'
})
export class ApoyoService {

  
  constructor() { }

  get(): Apoyo[] {
    let apoyos = [];
    apoyos = JSON.parse(localStorage.getItem('Apoyos'));
    return apoyos;
  }
  
  post(apoyo: Apoyo) {
    let apoyos = [];
    if (this.get() != null) {
      apoyos = this.get();
    }
    apoyos.push(apoyo);
    this.postSaldo(apoyo);  
    localStorage.setItem('Apoyos', JSON.stringify(apoyos));
  }

  postSaldo(apoyo: Apoyo){
    let Saldo: number;
    if (this.getSaldo() === null) {
      Saldo = 0;
    }else{
      Saldo = this.getSaldo();
    }
    Saldo += apoyo.valor;
    localStorage.setItem('Saldo', JSON.stringify(Saldo));
  }
  getSaldo(){
    let Saldo: number;
    Saldo = JSON.parse(localStorage.getItem('Saldo'));
    if (Saldo === null){
      Saldo = 0;
    }
    return Saldo;
  }

  validarSaldo(apoyo: Apoyo){
    let Saldo: number;
    Saldo = this.getSaldo();
    if (Saldo+apoyo.valor > 600000000){
      return true;
    }
    return false;
  }

  buscarApoyo(persona: Persona): Apoyo{
    
    let apoyos = [];
    let apoyo: Apoyo;
    let i: number;
    if (this.get() != null) {
      apoyos = this.get();
    }
    for (i = 0; apoyos.length; i++){
      if(apoyos[i].persona === persona.identificacion){
        apoyo = apoyos[i];
        return apoyo;
      }
    }
    return null;
  }
}
