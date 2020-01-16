import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedsuppliersService {

  private apiURL = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }

    public updatelabs(id, emptype) {
      return this.httpclient.put(this.apiURL + '/medicines/supplier/' + id, emptype,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    public deletelabs(id) {
      return this.httpclient.delete(this.apiURL + '/medicines/supplier/' + id,{observe : 'response'}).pipe(catchError(this.handleError));
    }

    public getlabs(id) {
      return this.httpclient.get(this.apiURL + '/medicines/supplier/'+ id) ;
    }
    public getlabssearch(id) {
      return this.httpclient.get(this.apiURL + '/medicines/supplier/obat/'+ id) ;
    }

    public getsear(id) {
      return this.httpclient.get(this.apiURL + '/medicines/supplier/supplier/'+ id) ;
    }
  public getAllLabs() {
    return this.httpclient.get(this.apiURL + '/medicines/supplier/');
  }
  public cretelabs(emptype) {
    return this.httpclient.post(this.apiURL + '/medicines/supplier/', emptype, {observe : 'response'}).pipe(catchError(this.handleError));
  }

}
