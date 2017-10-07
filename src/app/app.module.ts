import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {PushAssignmentService} from './push-assignment.service';
import { LetterGradePipe } from './letter-grade.pipe';
import { PerformanceCalcService } from './performance-calc.service';

@NgModule({
  declarations: [
    AppComponent,
    LetterGradePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PushAssignmentService,
    PerformanceCalcService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
