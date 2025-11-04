import { Component, TemplateRef, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sandbox',
  imports: [CommonModule],
  templateUrl: './sandbox.html',
})
export class Sandbox {
  @ViewChild('panelTemplate', { static: true }) panelTemplate!: TemplateRef<any>;
}
