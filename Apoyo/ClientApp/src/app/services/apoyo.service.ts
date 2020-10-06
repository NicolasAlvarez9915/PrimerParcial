import { Injectable } from '@angular/core';
import { Apoyo } from '../Apoyo/models/apoyo';

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
  getSaldo(): number {
    let Saldo: number;
    Saldo = parseInt(JSON.parse(localStorage.getItem('SaldoApoyo')));
    return Saldo;
  }

  validarSaldo(apoyo: Apoyo){
    if (this.getSaldo()+apoyo.valor > 600000000){
      return true;
    }
    return false;
  }
}
