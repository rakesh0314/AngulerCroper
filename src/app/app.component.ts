import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImageControlComponent } from './components/image-control/image-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    ImageControlComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  template: `
    <mat-toolbar color="primary">Image Cropper </mat-toolbar>

    <!-- <mat-form-field>
      <input
        ngModel
        (ngModelChange)="height.set($event)"
        matInput
        placeholder="Enter image height..."
      />
    </mat-form-field> -->

    <!-- <mat-form-field>
      <input
        ngModel
        matInput
        (ngModelChange)="width.set($event)"
        placeholder="Enter image width..."
      />
    </mat-form-field> -->

    <div class="container">
      <app-image-control
        [width]="width()"
        [height]="height()"
        path="/profile-images/my-image"
        (imageReady)="imageReady($event)"
      />
    </div>
  `,
  styles: [
    `
      .container {
        padding: 24px;
      }
    `,
  ],
})
export class AppComponent {
  height = signal(150);
  width = signal(150);

  imageReady(imageUrl: string) {
    console.log('Firebase Uploaded Image: ', imageUrl);
  }
}
