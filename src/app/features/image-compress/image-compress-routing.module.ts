import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCompressComponent } from './image-compress.component';

const routes: Routes = [{ path: '', component: ImageCompressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageCompressRoutingModule { }
