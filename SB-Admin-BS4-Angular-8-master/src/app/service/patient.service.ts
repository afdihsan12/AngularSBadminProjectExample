import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiURL = 'http://localhost:8080';
  
  
  constructor(private http: HttpClient) { }
  public getAllPatient() {
    return this.http.get(this.apiURL + '/patient');
  }
  public crete(patient) {
    return this.http.post(this.apiURL + '/patient', patient, {observe : 'response'}).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }
    public deletePatient(id) {
    return this.http.delete(this.apiURL + '/patient/' + id, {observe : 'response'}).pipe(catchError(this.handleError));
  }
  public getPatient(id): Observable<any> {
    return this.http.get(this.apiURL + '/patient/' + id) ;
  }

  public getPatients(id): Observable<any> {
    return this.http.get(this.apiURL + '/patient/search/' + id) ;
  }
  public upPatient(id, employee) {
    return this.http.put(this.apiURL + '/patient/' + id, employee,{observe : 'response'}).pipe(catchError(this.handleError));
  }
}
