import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {


constructor(private http:HttpClient){
   
}

  data$ : Observable<any> = this.http.get("https://localhost:7287/Cart/product-payment").pipe((res:any)=>res)

  cancel(d:any){
   this.http.delete(environment.base_url+"Cart/cancle-order",{params:new HttpParams().append("productId",d.id)}).subscribe(()=>{
      window.location.reload()
    }) 
  }

}
