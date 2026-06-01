import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../media/image-component/image-component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-component',
  imports: [CommonModule, ImageComponent, TableModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {
  // When specified as true, enables the pagination.
  @Input() paginator: boolean = false;
  // Array of integer/object values to display inside rows per page dropdown of paginator.
  @Input() rowsPerPageOptions: any[] | undefined = undefined;
  // Template of the current page report element. Available placeholders are {currentPage}, {totalPages}, {rows}, {first}, {last}, and {totalRecords}.
  @Input() currentPageReportTemplate: string = '{currentPage} of {totalPages}';
  // Whether to display current page report.
  @Input() showCurrentPageReport: boolean = false;
  // Enables scrollable table
  @Input() scrollable: boolean = false;
  // Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
  @Input() scrollHeight: string | undefined = undefined;
  // An array of objects to display.
  @Input() value: any[] = [];
  // An array of objects to represent dynamic columns.
  @Input() columns: Column[] = [];
  // Index of the first row to be displayed.
  @Input() first: number | null = null;
  // Number of rows to display per page.
  @Input() rows: number | undefined = undefined;
}
