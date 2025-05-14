import { Component, OnInit, Output } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { CandidatoDetail } from '../candidatoDetail';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {
  candidatos:  CandidatoDetail[] = [];

  @Output() candidatoSeleccionado = null
  seleccionado = false;

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }


  constructor(  private candidatoservice: CandidatoService) { }

  ngOnInit(): void {
    this.getCandidatos()
  }
  getCandidatos(){
    this.candidatoservice.getCandidatos().subscribe(candidato=>{
      console.log(`Insertado candidato  ${candidato.candidatos}`)
      this.candidatos = candidato.candidatos;
    })
  }


}
