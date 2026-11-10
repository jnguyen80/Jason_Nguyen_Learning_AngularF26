import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry } from 'rxjs';
import { APP_CONFIG } from '../shared/config/app-config';
import { Monkey } from '../shared/models/monkey';
import { MonkeyApi, toMonkey } from '../shared/models/monkey-api';

@Service()
export class MonkeyApiService {
  private http = inject(HttpClient);
  private config = inject(APP_CONFIG);
  private url = `${this.config.apiBaseUrl}/primatespecies`;

  // HttpClient: returns cold Observables

  search(): Observable<Monkey[]> {
    return this.http.get<MonkeyApi[]>(this.url).pipe(
      retry(2),
      map((list) => list.map(toMonkey)),
    );
  }

  getById(id: string): Observable<Monkey | null> {
    return this.search().pipe(
      map((list) => list.find((monkey) => monkey.id === Number(id)) ?? null),
      catchError(() => of(null)),
    );
  }
}
