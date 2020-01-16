import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = 'http://localhost:8080';
  
  
  constructor(private http: HttpClient) { }
  public getAllEmployee() {
    return this.http.get(this.apiURL + '/employee');
  }
  public creteUser(employee) {
    return this.http.post(this.apiURL + '/employee', employee, {observe : 'response'}).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }
    public deleteEmployee(id) {
    return this.http.delete(this.apiURL + '/employee/' + id, {observe : 'response'}).pipe(catchError(this.handleError));
  }
  public getEmployee(id): Observable<any> {
    return this.http.get(this.apiURL + '/employee/' + id) ;
  }

  public getEmployeename(id){
    return this.http.get(this.apiURL + '/employee/search/' + id) ;
  }

  public getEmployecode(id): Observable<any> {
    return this.http.get(this.apiURL + '/employee/search/type/' + id) ;
  }
  public updEmployee(id, employee) {
    return this.http.put(this.apiURL + '/employee/' + id, employee,{observe : 'response'}).pipe(catchError(this.handleError));
  }
}
