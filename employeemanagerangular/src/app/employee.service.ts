import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Don't forget to import HttpClient


@Injectable({

    providedIn:'root'
})
export class EmployeeService{

    private apiServerUrl ='';

    constructor(private http: HttpClient) {}
    public getEmployees(): Observable<any> {
        return this.http.get<any>('${this.apiServerUrl}/employee/all')
        
    }
}
