import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
 
  

  //login user metthod
  userloginData(data){
     return this.http.post('http://localhost:9090/login',data,{responseType:'text'});
  }
}
