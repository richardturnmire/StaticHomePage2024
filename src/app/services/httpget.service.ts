import { inject, Injectable, Injector, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { derivedAsync } from 'ngxtension/derived-async';
import { shareReplay, take } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { ICompany, IFavorite, IQuote, ISkill, Project } from '@app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpGetService {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  favorites = derivedAsync(() => this.fetchData<IFavorite[]>('Favorites'), {
    initialValue: [],
  });

  getQuotes(): Signal<IQuote[]> {
    return derivedAsync(() => this.fetchData<IQuote[]>('Quote'), {
      initialValue: [],
      injector: this.injector,
    });
  }

  getProjects(): Signal<Project[]> {
    return derivedAsync(() => this.fetchData<Project[]>('Projects'), {
      initialValue: [],
      injector: this.injector,
    });
  }

  getJobs(): Signal<ICompany[]> {
    return derivedAsync(() => this.fetchData<ICompany[]>('Jobs'), {
      initialValue: [],
      injector: this.injector,
    });
  }

  getFavorites(): Signal<IFavorite[]> {
    return this.favorites;
  }

  getSkills(): Signal<ISkill[]> {
    return derivedAsync(() => this.fetchData<ISkill[]>('Skills'), {
      initialValue: [],
      injector: this.injector,
    });
  }

  fetchData<T>(arg: string): Observable<T> {
    console.log('getting ', arg);
    return this.http.get<T>(`/api/Get${arg}`).pipe(take(1), shareReplay(1));
  }
}
