import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}
   
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.start()
    console.log(request)
    return next.handle(request).pipe(tap(res=>{
      if(res.type === HttpEventType.Response){
        this.loadingService.end()
      }
      console.log(res)
    }));
  }
}
