import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable , throwError  } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  constructor(private http:HttpClient ) { }

  login(user:any):any {
    console.log(user);
   console.log( this.http.post("http://localhost:8080/login",user)); 
  }

}
