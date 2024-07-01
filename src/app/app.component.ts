import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  photos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(data => {
        this.photos = data.slice(0, 50);
      }, error => console.error('Error fetching photos:', error));
  }
}

/*
Need to refactor becuse of subscribe
*/