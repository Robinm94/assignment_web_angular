import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApipostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  http = inject(HttpClient);

  showPosts(): Observable<any> {
    return this.http.get(this.url);
  }
}
