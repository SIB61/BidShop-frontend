import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() {}

  cache = new Map<string,any>()

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url + request.params.toString()
    if( request.method ==='GET' && this.cache.get(url)) return this.cache.get(url)
    return next.handle(request).pipe(tap(res=>{
        if(request.method==='GET'){
        this.cache.set(url,res)
        setTimeout(()=>{this.cache.delete(url)},20000)
      } 
    }));
  }
}
