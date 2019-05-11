import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor() { }

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenRol
    // modify request
    // if (sessionStorage.TOKEN) {
    //   request = request.clone({
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       'x-access-token': sessionStorage.TOKEN
    //     })
    //   });
    // }
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
           console.log(event);
           
          }
        }, error => {
          // http response status code
          console.error(error.status);
          console.error(error.message);

        })
      )

  };
}
