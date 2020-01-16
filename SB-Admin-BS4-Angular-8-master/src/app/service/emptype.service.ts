import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmptypeService {

  private apiURL = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }

    public updEmployeetype(id, emptype) {
      return this.httpclient.put(this.apiURL + '/roleemp/' + id, emptype,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    public deleteEmployeetype(id) {
      return this.httpclient.delete(this.apiURL + '/roleemp/' + id,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    

    public gettypesa(id) {
      return this.httpclient.get(this.apiURL + '/roleemp/seacrh/'+ id) ;
    }
    public gettype(id) {
      return this.httpclient.get(this.apiURL + '/roleemp/'+ id) ;
    }

    public gettypesearch(id) {
      return this.httpclient.get(this.apiURL + '/roleemp/'+ id) ;
    }

  public getAllEmployee() {
    return this.httpclient.get(this.apiURL + '/roleemp');
  }
  public getAllEmployeeT() {
    return this.httpclient.get(this.apiURL + '/roleemp/all');
  }
  public getParent() {
    return this.httpclient.get(this.apiURL + '/roleemp/parent');
  }
  public cretetype(emptype) {
    return this.httpclient.post(this.apiURL + '/roleemp', emptype, {observe : 'response'}).pipe(catchError(this.handleError));
  }
}
