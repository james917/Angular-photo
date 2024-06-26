import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: '../photo-gallery.component.html',
  styleUrls: ['../photo-gallery.component.scss'],
  imports: [CommonModule],  // Include CommonModule here
  standalone: true
})
export class PhotoGalleryComponent implements OnInit {
  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe({
      next: (data: any[]) => this.photos = data,
      error: (err: any) => console.error('Failed to get photos', err)
    });
  }
}
