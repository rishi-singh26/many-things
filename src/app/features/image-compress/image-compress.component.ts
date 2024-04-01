import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-image-compress',
  templateUrl: './image-compress.component.html',
  styleUrls: ['./image-compress.component.scss']
})
export class ImageCompressComponent {
  resizedImage: string = '';
  compressedImage: string = '';
  selectedImage: string = '';
  croppedImage: string = '';
  resizedImageTrusted: SafeUrl = '';
  compressedImageTrusted: SafeUrl = '';
  selectedImageTrusted: SafeUrl = '';

  constructor(private ng2ImgMaxService: Ng2ImgMaxService, private sanitizer: DomSanitizer) {
  }

  public fileChange(event: any) {
    if (event.target.files.length > 0) {
      this.processFile(event.target.files[0]);
    }
  }

  private processFile(file: File) {
    // TODO: revokeObjectURL in service worker
    // NOTE: This method is not available in Service Workers, due to issues with the Blob interface's life cycle and the potential for leaks.
    if (this.resizedImage !== null) {
      window.URL.revokeObjectURL(this.resizedImage);
    }
    if (this.compressedImage !== null) {
      window.URL.revokeObjectURL(this.compressedImage);
    }
    if (this.selectedImage !== null) {
      window.URL.revokeObjectURL(this.selectedImage);
    }
    if (this.croppedImage !== null) {
      window.URL.revokeObjectURL(this.croppedImage);
    }
    this.resizedImage = "processing";
    // this.compressedImage = "processing";
    this.croppedImage = "processing";
    this.selectedImage = window.URL.createObjectURL(file);
    this.selectedImageTrusted = this.sanitizer.bypassSecurityTrustUrl(this.selectedImage);
    // this.compressImage(file);
    this.resizeImage(file);
  }

  private resizeImage(file: File) {
    console.info("Starting resize for file:", file);
    this.ng2ImgMaxService.resize([file], 800, 800).subscribe({
      next: (result: Blob) => {
        console.log("Resize result:", result);
        this.resizedImage = window.URL.createObjectURL(result);
        this.resizedImageTrusted = this.sanitizer.bypassSecurityTrustUrl(this.resizedImage);
      },
      error: (error: any) => {
        console.error("Resize error:", error);
      }
    });
  }

}
