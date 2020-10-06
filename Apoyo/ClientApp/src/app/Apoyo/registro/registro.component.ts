import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  validarCampos(){
    alert(this.persona.identificacion)
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
                      alert("Debe ingresar un vallor.");
                    }else{
                      if(this.apoyo.fecha == undefined){
                        alert("Debe ingresar una fecha.");
                      }else{
                        alert("Todo correcto.");
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
}
