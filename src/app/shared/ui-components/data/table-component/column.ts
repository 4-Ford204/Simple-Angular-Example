import { TemplateRef } from '@angular/core';

export interface Column {
  field: string;
  header?: string;
  width?: string;
  sortable?: boolean;
  template?: TemplateRef<any>;
}
