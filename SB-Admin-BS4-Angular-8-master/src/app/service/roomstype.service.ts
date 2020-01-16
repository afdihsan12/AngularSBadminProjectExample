import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
    import { catchError } from 'rxjs/operators';
    import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomstypeService {
  private apiURL = 'http://localhost:8080';
  constructor(private httpclient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    alert('Sorry the Action is failed to execute')
    return throwError(error);
    }

    public updroomstype(id, emptype) {
      return this.httpclient.put(this.apiURL + '/roomstype/' + id, emptype,{observe : 'response'}).pipe(catchError(this.handleError));
    }
    public deleteroomstype(id) {
      return this.httpclient.delete(this.apiURL + '/roomstype/' + id,{observe : 'response'}).pipe(catchError(this.handleError));
    }

    public getroomstype(id) {
      return this.httpclient.get(this.apiURL + '/roomstype/'+ id) ;
    }

    public getroomstypesear(id) {
      return this.httpclient.get(this.apiURL + '/roomstype/search/'+ id) ;
    }
  public getAllRoomstype() {
    return this.httpclient.get(this.apiURL + '/roomstype');
  }
  public creteroomstype(emptype) {
    return this.httpclient.post(this.apiURL + '/roomstype', emptype, {observe : 'response'}).pipe(catchError(this.handleError));
  }


}
