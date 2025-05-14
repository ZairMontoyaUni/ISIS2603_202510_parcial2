import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoService } from '../candidato.service';
import { CandidatoDetail } from '../candidatoDetail';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  id!: string;
  @Input() candidato!: any;
  cargando = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private candidatoService: CandidatoService
  ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.candidatoService.getcandidato(this.id).subscribe({
      next: (pokes: any) => {
        this.candidato = pokes;
        this.cargando = false;
      },
      error: (err: any ) => {
        this.error = `No se pudieron cargar los pokémons de tipo ${this.id}.`;
        console.error(err);
        this.cargando = false;
      }
    });
  }
}
