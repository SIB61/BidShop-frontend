import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { District, SubDistrict } from 'src/app/models/district.model';
import Districts from 'src/app/static/districts.json'
import SubDistricts from 'src/app/static/sub-districts.json'
import { environment } from 'src/environments/environment';
import { ApiPageResponse } from 'src/app/models/Response.model'
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



districts:District[] = Districts.districts
subDistricts:SubDistrict[] = SubDistricts.sub_districts
selectedSubdistricts:SubDistrict[] = []

constructor(private http:HttpClient){
 console.log(this.districts[1])
 this.subDistricts.forEach(u=>{
      if(u.district_id == this.districts[1].id){
        console.warn(u) 
      }
    })
}

products$ = this.http.get(environment.base_url+"Home").pipe(map((res:ApiPageResponse<Product[]>)=>res.data))


changeDistrict(event:any){
 let district = this.districts.find(d=>d.name===event.target.value)
 this.selectedSubdistricts = []
 console.log(district)
  this.subDistricts.forEach(sb=>{
      if(sb.district_id===district?.id) this.selectedSubdistricts.push(sb)
    })
}

}
