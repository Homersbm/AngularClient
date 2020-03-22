import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Exam, IEditExam } from '../exam/exam';
import { ExamService } from '../exam/exam.service';

@Component({
    selector: 'app-edit-exam',
    templateUrl: './edit-exam.component.html',
    styleUrls: ['./edit-exam.component.scss']
})
export class EditExamComponent implements OnInit {
    currentExam: Exam;
    examFormGroup: FormGroup;
    constructor(private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<EditExamComponent>,
        private examService: ExamService,
        @Inject(MAT_DIALOG_DATA) dialogData: IEditExam<Exam>) {
        this.currentExam = dialogData.selectedData;

        this.examFormGroup = this.formBuilder.group({
            examKey: [this.currentExam.examKey, Validators.required],
            patientKey: [this.currentExam.patientKey, Validators.required],
            isLocked: [this.currentExam.isLocked, Validators.required],
            examStatusCode: [this.currentExam.isLocked, Validators.required],
            patientSexCode: [this.currentExam.patientSexCode, Validators.required],
            examAge: [this.currentExam.examAge, Validators.required],
        });
    }

    ngOnInit(): void {
        this.examFormGroup = this.formBuilder.group({
            examKey: [this.currentExam.examKey, Validators.required],
            patientKey: [this.currentExam.patientKey, Validators.required],
            isLocked: [this.currentExam.isLocked, Validators.required],
            examStatusCode: [this.currentExam.isLocked, Validators.required],
            patientSexCode: [this.currentExam.patientSexCode, Validators.required],
            examAge: [this.currentExam.examAge, Validators.required],
        });

    }

    onSave(): void {
        const updatedExam = {
            examKey: this.examFormGroup.value.examKey,
            patientKey: this.examFormGroup.value.patientKey,
            isLocked: this.examFormGroup.value.isLocked,
            examStatusCode: this.examFormGroup.value.examStatusCode,
            patientSexCode: this.examFormGroup.value.patientSexCode,
            examAge: this.examFormGroup.value.examAge
        } as Exam;

        this.examService.save(updatedExam).subscribe( () =>  this.dialogRef.close(true));
    }

    onClose(): void {
        this.dialogRef.close(true);
    }

}
