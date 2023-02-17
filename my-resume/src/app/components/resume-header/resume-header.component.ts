import { Component } from '@angular/core';
import { ResumeStore } from 'src/core/singletons/dataStore';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss'],
})
export class ResumeHeaderComponent {
  constructor(public store: ResumeStore) {}
}
