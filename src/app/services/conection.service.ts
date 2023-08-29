import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from  '@angular/common/http';
import { map } from 'rxjs';
import { Credenciales } from '../model/credenciales';
import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  public isConnect? :boolean = true;
  private object = {};

  constructor(private http: HttpClient) { }

  getToken (){
    return localStorage.getItem("token");
  }

  public loginService (cred : Credenciales){

    this.object = JSON.stringify(cred)

    return this.http.post("http://localhost:8080/api/auth/login",cred, {
      observe: "response"
    }).pipe(map((response : HttpResponse<any>) => {
        console.log(response)
        const body = response.body;
        const header = response.headers;
        console.log(body)
        console.log(header)
        
        localStorage.setItem("token", body.accessToken);

        return body;
      }));
  }

  public dataHeader(){

    this.object = JSON.stringify({
      "Authorization": localStorage.getItem("accessToken")
    })

    this.http.get("localhost:8080/usuario/header/ver",this.object).subscribe(res => {
      console.log(res)
      return res;
    })

  }


}
