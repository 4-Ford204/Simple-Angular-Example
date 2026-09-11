import { Component } from '@angular/core';
import { ResumeComponent } from '../../../shared/utility-components/resume-component/resume-component';

@Component({
  selector: 'app-resume-sample',
  imports: [ResumeComponent],
  templateUrl: './resume-sample.html',
  styleUrl: './resume-sample.css',
})
export class ResumeSample {
  image =
    'https://www.ffcollectibles.com.au/cdn/shop/files/AOSTUDIO_ONEPIECETHREEBROTHERSSERIES2.LUFFY_1.jpg?v=1684158397&width=493';
  name = 'Lê Tự Huỳnh Duy';
  position = '.NET Developer';
  mail = 'adminorh@gmail.com';
  phone = ' 0905 xxx 204';
  birthday = '00/00/0000';
  address = 'Da Nang City, Vietnam';
  description =
    'Looking for a challenging position in a dynamic environment where I can apply my knowledge and skills for continuous improvement, contribute to the growth of the organization by developing scalable and efficient software solutions that meet client needs and enhance user experience.';
  technologies = [
    { type: 'Framework', name: '.NET, Angular' },
    { type: 'Database', name: ' SQL Server, Oracle, PostgreSQL' },
    { type: 'Others', name: 'Redis, RabbitMQ, Elasticsearch' },
  ];
}
