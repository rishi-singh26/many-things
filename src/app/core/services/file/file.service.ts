import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
// import saveAs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  isValidFileType(fileName: string, acceptableFileTypes: string[]): boolean {
    const parts: string[] = fileName.split('.');
    return acceptableFileTypes.includes(`.${parts[parts.length - 1]}`);
  }

  // downloadFileFromBase64(base64Str: string, fileName: string): void {
  //   const byteArray = new Uint8Array(window.atob(base64Str).split('').map(char => char.charCodeAt(0)));
  //   const blob = new Blob([byteArray], { type: 'application/pdf' });
  //   // const url = window.URL.createObjectURL(blob);
  //   saveAs(blob, fileName);
  // }

  getURLFromBase64(base64Str: string): string {
    const byteArray = new Uint8Array(atob(base64Str).split('').map(char => char.charCodeAt(0)));

    // const byteArray = new Uint8Array(window.atob(base64Str).split('').map(char => char.charCodeAt(0)));
    const blob = new Blob([byteArray], { type: 'video/*' });
    return window.URL.createObjectURL(blob);
  }

  exportJSONToExcel(data: any[], fileNameComponents: string[]): void {
    const fileName = fileNameComponents.filter(item => typeof item === 'string').join('-');
    const sheetName = 'Sheet1';
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX?.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, `${fileName}-${new Date().toDateString()}.xlsx`);
  }
}
