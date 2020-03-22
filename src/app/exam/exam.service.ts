import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Exam } from './exam';

@Injectable({
    providedIn: 'root'
})
export class ExamService {

    public examServiceUrl = 'http://examservicecontainer/api/Exam'; // URL to web api
    constructor(private http: HttpClient) {
        console.log('Constru:' + this.examServiceUrl);
    }

    getExams(): Observable<Exam[]> {
        let headers1 = new HttpHeaders();
        headers1 = headers1.set('Content-Type', 'application/json; charset=utf-8');
        headers1.set('Accept', '*/*');
        // headers1.set('X-Requested-With', 'XMLHttpRequest');
        return this.http
            .get<Exam[]>(this.examServiceUrl, {headers: headers1})
            .pipe(map(data => data));
    }

    save(exam: Exam) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const url = `${this.examServiceUrl}/${exam.examKey}` + `?examKey=` + exam.examKey;
        return this.http.put<Exam>(url, exam).pipe(catchError(this.handleError));
    }

    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
    }

    delete(exam: Exam) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const url = `${this.examServiceUrl}/${exam.examKey}` + `?examKey=` + exam.examKey;
        return this.http.delete<Exam>(url).pipe(catchError(this.handleError));
    }
}
