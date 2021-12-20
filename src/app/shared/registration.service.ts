import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Registration} from './registration.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  selectedregister:Registration
  login:Registration[];
  readonly baseURL="http://localhost:1000/router";

constructor(private http:HttpClient){ }
postForm(a:Registration){
  return this.http.post(this.baseURL,a)
}
userslist(){
  return this.http.get(this.baseURL)
}
postregister(a:Registration){
  return this.http.post(this.baseURL+`/${a._id}`,a)
}
deleteusers(id:string){
  return this.http.delete(this.baseURL+`/${id}`)
}

}
