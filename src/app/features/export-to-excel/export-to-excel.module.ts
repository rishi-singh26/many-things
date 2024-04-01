import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportToExcelComponent } from './export-to-excel.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExportToExcelRoutingModule } from './export-to-excel-routing.module';



@NgModule({
  declarations: [
    ExportToExcelComponent
  ],
  imports: [
    CommonModule,
    ExportToExcelRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class ExportToExcelModule { }
