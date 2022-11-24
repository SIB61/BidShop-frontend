import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(private http:HttpClient){}
  pageNumber$ = new BehaviorSubject(1)
  data$ = this.pageNumber$.pipe(switchMap((pn:number)=>{
    return this.http.get(environment.base_url+"Cart",{params:new HttpParams().append('PageNumber',pn)}).pipe(map((res:any)=>res.data))
  }))
  pre(){
    if(this.pageNumber$.value>1)
    this.pageNumber$.next(this.pageNumber$.value-1)
  }
  next(){
    this.pageNumber$.next(this.pageNumber$.value+1)
  }
}
