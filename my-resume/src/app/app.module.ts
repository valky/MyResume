import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeHeaderComponent } from './components/resume-header/resume-header.component';
import { ResumeColumnComponent } from './components/resume-column/resume-column.component';
import { ResumeContentComponent } from './components/resume-content/resume-content.component';
import { ResumeStore } from 'src/core/singletons/dataStore';

@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    ResumeColumnComponent,
    ResumeContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ResumeStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
