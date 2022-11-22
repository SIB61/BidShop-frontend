import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  id = ""
  product$ : Observable<Product> = new Observable()
constructor(private route: ActivatedRoute,private http:HttpClient){
  route.params.subscribe(r=>{
    this.id= r['id'] 
    this.product$ = this.http.get(environment.base_url+"Home/product",{params:new HttpParams().append('Id',this.id)}).pipe(map((res:any)=>res.data))
   }) 

  }
}
