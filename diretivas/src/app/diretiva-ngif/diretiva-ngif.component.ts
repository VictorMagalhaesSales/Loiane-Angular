import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  mostrarCursos: boolean = false;

  mostrarExcluirCurso(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit() {
  }

}
