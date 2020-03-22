export class Exam {
    examKey: string;
    patientKey: string;
    isLocked: boolean;
    examStatusCode: string;
    patientSexCode: string;
    examAge: string;
}

export interface IEditExam<T> {
	selectedData: T;
	// dataList: Array<T>;
}
