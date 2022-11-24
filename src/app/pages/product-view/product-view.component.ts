import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { product2 } from 'src/app/models/productindividual';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  id = ""
  price:number
  product$ : Observable<product2> = new Observable()
  logedIn = localStorage.getItem('token')
constructor(private route: ActivatedRoute,private http:HttpClient){
  route.params.subscribe(r=>{
    this.id= r['id'] 
    this.product$ = this.http.get(environment.base_url+"Home/product",{params:new HttpParams().append('Id',this.id)}).pipe(map((res:any)=>res.data))
   }) 
}
bid(){
    if(this.price && this.price != 0)
    this.http.post(environment.base_url+"Bid",{price:this.price,productId:this.id}).subscribe(_=>{
      window.location.reload()
    })
  }
}
