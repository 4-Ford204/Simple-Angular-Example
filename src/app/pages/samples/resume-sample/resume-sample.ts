import { Component } from '@angular/core';
import { ResumeComponent } from '../../../shared/utility-components/resume-component/resume-component';

@Component({
  selector: 'app-resume-sample',
  imports: [ResumeComponent],
  templateUrl: './resume-sample.html',
  styleUrl: './resume-sample.css',
})
export class ResumeSample {
  image = 'https://www.ffcollectibles.com.au/cdn/shop/products/WARHEADSTUDIOREDROCLUFFY_1.jpg';
  name = 'Lê Tự Huỳnh Duy';
  position = '.NET Developer';
  description = 'aaaaaaaaaaaaaaa';
  technologies = ['.NET', 'Angular', 'SQL Server'];
}
