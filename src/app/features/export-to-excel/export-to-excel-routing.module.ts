import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportToExcelComponent } from './export-to-excel.component';

const routes: Routes = [{ path: '', component: ExportToExcelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportToExcelRoutingModule { }
