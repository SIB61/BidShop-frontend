import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { District, SubDistrict } from 'src/app/models/district.model';
import Districts from 'src/app/static/districts.json';
import SubDistricts from 'src/app/static/sub-districts.json';
import { environment } from 'src/environments/environment';
import { ApiPageResponse } from 'src/app/models/Response.model';
import { Product } from 'src/app/models/product.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiEndpoints } from 'src/app/enum/api-endpoints';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form: FormGroup;

  _searchItems = new BehaviorSubject<{
    district: string;
    sub_district: string;
    order: string;
    catagory: number;
    key: string;
    pageNumber:number
  }>({
    district: undefined,
    sub_district: undefined,
    order: undefined,
    catagory: undefined,
    key: undefined,
    pageNumber:1
  });
  searchItems$ = this._searchItems.asObservable();

  districts: District[] = Districts.districts;
  subDistricts: SubDistrict[] = SubDistricts.sub_districts;
  selectedSubdistricts: SubDistrict[] = [];

  products: any[];

  constructor(private http: HttpClient, fb: FormBuilder,private loadingService:LoadingService) {
    console.log(this.districts[1]);
    this.subDistricts.forEach((u) => {
      if (u.district_id == this.districts[1].id) {
        console.warn(u);
      }
    });
    this.form = fb.group({
      district: [''],
      sub_district: [''],
      order: [''],
      catagory: [''],
      key: '',
    });

  }

  products$ = this._searchItems.pipe(
    switchMap((value: any) => {
      let params = new HttpParams();
      if (value.catagory) params = params.append('TypeId', value.catagory);
      if (value.district) params = params.append('District', value.district);
      if (value.sub_district) params = params.append('SubDistrict', value.sub_district);
      if (value.order) params = params.append('OrderByPrices', value.order);
      if (value.order) params = params.append('OrderByPrices', value.order);
      if (value.key) params = params.append('Name', value.key);
      if (value.pageNumber) params = params.append('PageNumber', value.pageNumber);
      return this.http
        .get(environment.base_url + 'Home', {
          params: params,
        })
        .pipe(map((res: ApiPageResponse<Product[]>) => res.data),tap(_=>{
        }));
    })
  );

  catagories$ = this.http
    .get(environment.base_url + ApiEndpoints.CatagoryList)
    .pipe(map((res: any) => res.data));

  changeDistrict() {
    let district = this.districts.find(
      (d) => d.name === this.form.value.district
    );
    if (!district) this.selectedSubdistricts = this.subDistricts;
    else
      this.selectedSubdistricts = this.subDistricts.filter(
        (sb) => sb.district_id === district.id
      );
  }
  pageNumber=1
  search = () => {
    this._searchItems.next({
      district: this.form.value.district,
      sub_district: this.form.value.sub_district,
      order: this.form.value.order,
      catagory: this.form.value.catagory,
      key: this.form.value.key,
      pageNumber:this.pageNumber
    });
  };
  next(){
   this.pageNumber = this.pageNumber+1
    this._searchItems.next({
      ...this._searchItems.value,
      pageNumber:this.pageNumber
    })
  }

  pre(){
    if(this.pageNumber>1){
   this.pageNumber = this.pageNumber-1
    this._searchItems.next({
      ...this._searchItems.value,
      pageNumber:this.pageNumber
    })
  }
  }
}
