import { Component } from '@angular/core';
import { ResumeStore } from 'src/core/singletons/dataStore';

@Component({
  selector: 'app-resume-column',
  templateUrl: './resume-column.component.html',
  styleUrls: ['./resume-column.component.scss'],
})
export class ResumeColumnComponent {
  constructor(public store: ResumeStore) {}
}
