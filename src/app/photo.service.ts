import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.slice(0, 50)) // Limit to 50 photos
    );
  }
}
