import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImageComponent } from '../media/image-component/image-component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-component',
  imports: [CommonModule, ImageComponent, TableModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.css',
})
export class TableComponent {
  @Input() columns: Column[] = [];
  @Input() items: any[] = [];
}
