import { Component, OnInit } from '@angular/core';
import { ExamService } from './exam.service';
import { Exam } from './exam';
import { MatDialog } from '@angular/material/dialog';
import { EditExamComponent } from '../edit-exam/edit-exam.component';

@Component({
    selector: 'app-exam',
    templateUrl: './exam.component.html',
    styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
    displayedColumns: string[] = ['examKey', 'patientKey', 'examStatusCode', 'patientSexCode', 'examAge', 'deletebutton'];
    examList: Exam[];

    constructor(private examService: ExamService,
                private dialog: MatDialog ) { }

    ngOnInit(): void {
        console.log('ngOnInit');
        console.log(this.examService.examServiceUrl);
        this.examService.getExams()
            .subscribe(ex => this.examList = ex);
    }

    deleteExam(row: Exam) {
        this.examService.delete(row).subscribe();
    }

    getExamRecord(row: Exam): void {
        this.dialog.open(EditExamComponent, {
            width: '676px',
            height: 'auto',
            data: {
                selectedData: row
            }
        });
    }

}
