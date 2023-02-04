import { Injectable } from '@angular/core';
import * as MyResume from '../../assets/data/myresume.json';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeStore {
  public resume: Resume;

  constructor() {
    this.resume = MyResume;
  }
}
