import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { every, map } from 'rxjs';
import { ApiEndpoints } from 'src/app/enum/api-endpoints';
import { District, SubDistrict } from 'src/app/models/district.model';
import Bangladesh from 'src/app/static/bangladesh.json'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.scss']
})
export class PostAdComponent {

districts:District[] = Bangladesh.districts 
subDistricts:SubDistrict[] = Bangladesh.sub_districts 
selectedSubdistricts:SubDistrict[] = []
form:FormGroup

constructor(fb:FormBuilder,private http:HttpClient){
this.form = fb.group({
      name:['',[Validators.required]],
      catagory:['',[Validators.required]],
      description:['',[]],
      buying_date:['',[Validators.required]],
      bidding_end_date:['',[Validators.required]],
      district:['',[Validators.required]],
      sub_district:['',[Validators.required]],
      address:['',[Validators.required]],
      price:['',[Validators.required]],
      image:['',[]],
      imageSource:[null]
    })
  }
catagories$ = this.http.get(environment.base_url+ApiEndpoints.CatagoryList).pipe(map((res:any)=>res.data))


onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        imageSource: file
      });
    }
  }

changeDistrict(){
  let district = this.districts.find(d=>d.name===this.form.value.district)
  this.selectedSubdistricts = this.subDistricts.filter(sb=>sb.district_id==district.id)
}

post(){
    let formValue = this.form.value
    let formData = new FormData()
    formData.append('Name',formValue.name)
    formData.append('Description',formValue.description)
    formData.append('Prices',formValue.price)
    formData.append('TypeId',formValue.catagory)
    formData.append('BuyingDate',formValue.buying_date)
    formData.append('BiddingEndDate',formValue.bidding_end_date)
    formData.append('District',formValue.district)
    formData.append('SubDistrict',formValue.sub_district)
    formData.append('Address',formValue.address)
    formData.append('ProductPhotos',formValue.imageSource)
    this.http.post(environment.base_url+ApiEndpoints.PostAd,formData).subscribe(res=>{
      this.form.reset()
    })
  }

}
