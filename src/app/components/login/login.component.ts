import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { every, tap } from 'rxjs';
import { ApiResponse } from 'src/app/models/Response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup
constructor(fb:FormBuilder,private http:HttpClient){
 this.form = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  signIn(){
    this.http.post(environment.base_url+"Account/login",this.form.value)
    .pipe(tap((res: ApiResponse<any>) =>{
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('user_id',res.data.id)
        console.log(res)
      })).subscribe()
  }



  change(event:any){
    console.log(event.target.value)
  }



}


