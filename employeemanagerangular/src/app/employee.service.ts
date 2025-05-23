import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Don't forget to import HttpClient
import { Employee } from './employee';


@Injectable({

    providedIn:'root'
})
export class EmployeeService{

    private apiServerUrl ='';

    constructor(private http: HttpClient) {}

    public getEmployees(): Observable<any> {
        return this.http.get<any>('${this.apiServerUrl}/employee/all');
        
    }

    public addEmployee(employee:Employee): Observable<Employee> {
        return this.http.post<Employee>('${this.apiServerUrl}/employee/add',employee);
        
    }       

    public updateEmployee(employee:Employee): Observable<Employee> {
        return this.http.put<Employee>('${this.apiServerUrl}/employee/update',employee);
        
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeId}');
        
    }
}
