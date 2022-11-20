import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Districts from 'src/app/static/districts.json'
import { District } from 'src/app/models/district.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

form : FormGroup
districts : District[] = Districts.districts


constructor(fb:FormBuilder, private http:HttpClient){
    this.form=fb.group({
       name: ['',[Validators.required,Validators.minLength(4)]],
       email:['',[Validators.required,Validators.minLength(4),Validators.email]],
       phone:['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
       district:[''],
       address:[''],
       password:['',[Validators.required,Validators.minLength(6)]]
    })
  }

  register(){
    console.log(this.form.value)
    this.http.post(environment.base_url+"Account",this.form.value).subscribe((res:any)=>{
      console.log(res)
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user_id",res.data.id)
    }) 
  }

}
