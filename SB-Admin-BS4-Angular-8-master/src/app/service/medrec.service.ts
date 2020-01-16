import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedrecService {

  private apiURL = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }

    public updatelabs(id, emptype) {
      return this.httpclient.put(this.apiURL + '/medrec/' + id, emptype,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    public deletelabs(id) {
      return this.httpclient.delete(this.apiURL + '/medrec/' + id,{observe : 'response'}).pipe(catchError(this.handleError));
    }

    public getlabs(id) {
      return this.httpclient.get(this.apiURL + '/medrec/'+ id) ;
    }

    public getlabsdocto(id) {
      return this.httpclient.get(this.apiURL + '/medrec/search/doctor/'+ id) ;
    }

    public getlabspasiens(id) {
      return this.httpclient.get(this.apiURL + '/medrec/search/patient/'+ id) ;
    }
  public getAllLabs() {
    return this.httpclient.get(this.apiURL + '/medrec');
  }
  public cretelabs(emptype) {
    return this.httpclient.post(this.apiURL + '/medrec', emptype, {observe : 'response'}).pipe(catchError(this.handleError));
  }


}
