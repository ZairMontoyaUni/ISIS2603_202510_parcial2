
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatoDetail } from './candidatoDetail';
import { forkJoin, Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

    private apiUrl = `https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json`;

    constructor(private http : HttpClient) { }


    getCandidatos(): Observable<any> {
    console.log(`Insertado  ${this.apiUrl}`  );
    return this.http.get<any>(`${this.apiUrl}`);
  }


  getcandidato(id : string): Observable<CandidatoDetail> {
    return this.http.get<CandidatoDetail>(`https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/${id}/candidates.json`);
  }

}


