import { Component, OnInit, inject } from '@angular/core';

import { PrimeIcons } from 'primeng/api';
import { TableComponent } from '../../shared/ui-components/data/table-component/table-component';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-administration',
  imports: [TableComponent],
  templateUrl: './administration.html',
  styleUrl: './administration.css',
})
export class Administration implements OnInit {
  columns: any[] = [];
  universities: any[] = [];

  PrimeIcons = PrimeIcons;

  private readonly universityService = inject(UniversityService);

  ngOnInit(): void {
    this.columns = [
      { field: 'country', header: 'Country' },
      { field: 'name', header: 'Name' },
    ];
    this.fetchUniversities();
  }

  fetchUniversities() {
    this.universityService.getUniversities().then((response: any) => {
      this.universities = response.data;
    });
  }
}
