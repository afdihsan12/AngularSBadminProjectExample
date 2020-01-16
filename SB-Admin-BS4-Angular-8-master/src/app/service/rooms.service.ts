import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiURL = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }

    public updroomstype(id, emptype) {
      return this.httpclient.put(this.apiURL + '/rooms/' + id, emptype,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    public deleteroomstype(id) {
      return this.httpclient.delete(this.apiURL + '/rooms/' + id,{observe : 'response'}).pipe(catchError(this.handleError));
    }

    public getroomstype(id) {
      return this.httpclient.get(this.apiURL + '/rooms/'+ id) ;
    }
  public getAllRoomstype() {
    return this.httpclient.get(this.apiURL + '/rooms');
  }
  public getroomstypesear(id) {
    return this.httpclient.get(this.apiURL + '/rooms/search/'+ id) ;
  }
  public creteroomstype(emptype) {
    return this.httpclient.post(this.apiURL + '/rooms', emptype, {observe : 'response'}).pipe(catchError(this.handleError));
  }
}
