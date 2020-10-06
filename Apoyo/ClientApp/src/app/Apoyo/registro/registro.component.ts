import { Component, OnInit } from '@angular/core';
import { ApoyoService } from 'src/app/services/apoyo.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Apoyo } from '../models/apoyo';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona: Persona;
  apoyo: Apoyo;

  constructor(private personaService: PersonaService, private apoyoService: ApoyoService) { 
    
  }

  ngOnInit(): void {
    this.persona = new Persona;
    this.apoyo = new Apoyo;
  }

  validarCampos(){
    if(this.persona.identificacion === undefined){
      alert("Debe ingresar la identificacion.");
    }else{
      if(this.persona.nombres === undefined){
        alert("Debe ingresar los nombres.");
      }else{
        if(this.persona.apellidos === undefined){
          alert("Debe ingresar los apellidos.");
        }else{
          if(this.persona.sexo === undefined ){
            alert("Debe seleccionar un sexo");
          }else{
            if(this.persona.edad === undefined){
              alert("Debe ingresar su edad.");
            }else{
              if(this.persona.departamento === undefined){
                alert("Debe ingresar un departamento.");
              }else{
                if(this.persona.ciudad == undefined){
                  alert("Debe ingresar una ciudad.");
                }else{
                  if(this.apoyo.tipo === undefined){
                    alert("Debe seleccionar un tipo de apoyo.");
                  }else{
                    if(this.apoyo.valor == undefined){
                      alert("Debe ingresar un valor.");
                    }else{
                      if(this.apoyo.fecha == undefined){
                        alert("Debe ingresar una fecha.");
                      }else{
                        this.registrar();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  registrar(){
    if(this.personaService.validarExistencia(this.persona)){
      alert("Ya existe una persona registrada con esta identificacion.");
    }else{
      if(this.apoyoService.validarSaldo(this.apoyo)){
        alert("Excede el limite estrablecido por el gobierno.")
      }else{
        this.personaService.post(this.persona);
        this.apoyo.persona = this.persona.identificacion;
        this.apoyoService.post(this.apoyo);
        alert("Registrado correctamente."+ this.persona.identificacion);
      }
    }
  }
}
