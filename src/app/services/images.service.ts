import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IImage } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IImage[]> {
    return this.http.get<IImage[]>(
      'https://jsonplaceholder.typicode.com/photos',
      { params: new HttpParams().append('_limit', 50) }
    );
  }
}
