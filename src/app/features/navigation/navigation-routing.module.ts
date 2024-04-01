import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: '', loadChildren: () => import('../image-compress/image-compress.module').then(m => m.ImageCompressModule) },
      { path: 'other', loadChildren: () => import('../image-compress/image-compress.module').then(m => m.ImageCompressModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
