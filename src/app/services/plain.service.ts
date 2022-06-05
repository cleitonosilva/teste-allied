import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, retry, shareReplay } from 'rxjs';
import { Plataforma } from '../models/plataformas.model';
import { Plano } from '../models/plano.model';


@Injectable({
  providedIn: 'root'
})
export class PlainService {
  private readonly basePath = environment.apiURL;
  constructor(public http: HttpClient) {}

  // get plataformas
  getPlataformas( ): Observable<Plataforma[]> {
    return this.http
      .get<Plataforma[]>(this.basePath + '/plataformas')
      .pipe(
        map((res: any) => res.plataformas)
      );
  }

  // get planos
  getPlanos(sku: string): Observable<Plano[]> {
    return this.http
      .get<Plano[]>(this.basePath + '/planos/' + sku ).pipe(
        map((res: any) => res.planos)
      );
  }





}
