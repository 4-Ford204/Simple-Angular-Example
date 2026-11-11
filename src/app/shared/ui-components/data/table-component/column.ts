import { InputType } from '../../../../core/enums/input-type.enum';
import { TemplateRef } from '@angular/core';

export interface Column {
  field: string;
  header?: string;
  width?: string;
  sortable?: boolean;
  filterable?: InputType;
  template?: TemplateRef<any>;
}
