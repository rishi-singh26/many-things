import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ExportToExcelDataSource, ExportToExcelItem } from './export-to-excel-datasource';
import { FileService } from 'src/app/core/services/file/file.service';

@Component({
  selector: 'app-export-to-excel',
  templateUrl: './export-to-excel.component.html',
  styleUrl: './export-to-excel.component.scss'
})
export class ExportToExcelComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ExportToExcelItem>;
  dataSource = new ExportToExcelDataSource();
  private fileService = inject(FileService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  exportDataToExcel(): void {
    this.fileService.exportJSONToExcel(this.dataSource.data, ['ExportedData']);
  }
}
