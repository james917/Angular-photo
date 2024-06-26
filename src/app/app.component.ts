import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mx-auto px-4">
      <h1 class="text-3xl text-center text-gray-800 my-8">Photo Gallery</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div *ngFor="let photo of photos" class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" [src]="photo.thumbnailUrl" [alt]="photo.title">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ photo.title }}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [CommonModule],  // Import CommonModule here
  standalone: true
})
export class AppComponent {
  // Example data array
  photos = [
    { thumbnailUrl: 'url1', title: 'Title 1' },
    { thumbnailUrl: 'url2', title: 'Title 2' },
    // Add more photo objects as needed
  ];
}
