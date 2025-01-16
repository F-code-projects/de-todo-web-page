import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidW92bndoeGh5Y3Brb3phYXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDM4MzMsImV4cCI6MjA1MTcxOTgzM30.yI93xEzLO_-Oqr4-i_yti_zp-42Rdji8bMO07EHwVaI`, 
      },
    });

    return next.handle(modifiedReq);
  }
}
