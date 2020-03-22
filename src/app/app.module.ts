import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ExamComponent } from './exam/exam.component';
import { HttpClientModule } from '@angular/common/http';
import { ExamService } from './exam/exam.service';
import { MatTableModule } from '@angular/material/table';
import { EditExamComponent } from './edit-exam/edit-exam.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    EditExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    // MatInputModule,
  ],
  providers: [ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
