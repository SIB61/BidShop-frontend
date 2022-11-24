import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { faRemove, faStop } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent {
faDelete = faRemove
faStop = faStop

_pageNumber = new BehaviorSubject(1)


constructor(private http:HttpClient){
   
}
  data$ = this._pageNumber.pipe(switchMap(
    (pn:number)=>{
        return this.http.get(environment.base_url+"Home/my-product",{params:new HttpParams().append('PageNumber',pn)}).pipe(map((res:any)=>res.data))
    }
  ))

  stop(id:string){
    this.http.put(environment.base_url+"Home/stop-bidding",{},{params:new HttpParams().append('productId',id)}).subscribe(()=>{
     window.location.reload() 
    }) 
  }

  paymentReq(v:any){
    let data = {
      productId:v.id,
      customerId:v.highBidInfo.userId,
      prices:v.highBidInfo.price
    }
    console.log(v)
    console.log(data)
    this.http.post(environment.base_url+"Home/send-payment-request",data).subscribe(()=>{
      window.location.reload()
    })  
  }

  on(id:string){
    this.http.put(environment.base_url+"Home/on-bidding",{},{params:new HttpParams().append('productId',id)}).subscribe(()=>{
     window.location.reload() 
    }) 
  }

  delete(id:string){
    this.http.delete(environment.base_url+"Product/Delete/"+id).subscribe((v:any)=>{
     window.location.reload()
    })
  }
  next(){
    this._pageNumber.next(this._pageNumber.value+1)
  }
  pre(){
    if(this._pageNumber.value>1)
    this._pageNumber.next(this._pageNumber.value-1)
  }

}

