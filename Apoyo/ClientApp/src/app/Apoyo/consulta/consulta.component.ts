import { Component, OnInit } from '@angular/core';
import { ApoyoService } from 'src/app/services/apoyo.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Apoyo } from '../models/apoyo';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  persona: Persona;
  constructor(private personaService: PersonaService, private apoyoService: ApoyoService) { }

  ngOnInit(): void {
  }


  Todos(){
    var i;
    var personas: Persona[] = [];
    var apoyo: Apoyo;
    var cadenaTodos = "";
    
    personas = this.personaService.get();

    for (i = 0; i < personas.length; i++){


        cadenaTodos +=
        '<tr>' +
            '<td >' + personas[i].identificacion + '</td>' +
            '<td>' + personas[i].nombres+ '</td>' +
            '<td>' + personas[i].apellidos+ '</td>' +
            '<td>' + personas[i].edad+ '</td>' +
            '<td>' + personas[i].sexo+ '</td>' +
            '<td>' + personas[i].departamento+ '</td>' +
            '<td>' + personas[i].ciudad+ '</td>' +
            '</tr>';
    }
    document.getElementById("tdPulsaciones").innerHTML= cadenaTodos;
  }
}
