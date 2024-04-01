import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCompressComponent } from './image-compress.component';
import { ImageCompressRoutingModule } from './image-compress-routing.module';


@NgModule({
  declarations: [
    ImageCompressComponent,
  ],
  imports: [
    CommonModule,
    ImageCompressRoutingModule,
  ]
})
export class ImageCompressModule { }
