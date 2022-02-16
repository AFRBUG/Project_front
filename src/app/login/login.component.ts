import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from '../servcies/user-service.service';
import { register_user } from '../shared/models';
import { log_user } from '../shared/models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userlogin = true;
  User:log_user=new log_user();
  frechUser:register_user=new register_user(); 
  userregister = false;
  email:any;
  password:any;
  formdata:any; 
 // fromdata:FormData=new FormData ;
  constructor( private services:UserServiceService) { }

  ngOnInit(): void {
    this.formdata= new FormGroup({
      email: new FormControl("test@gmail.com"),
      password: new FormControl("abcd1234")
   });
  }
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }
  onClickSubmit(data:any){
    this.User.username=data.email;
    this.User.password=data.password;
    this.services.login(JSON.stringify(this.User));
  }

}
