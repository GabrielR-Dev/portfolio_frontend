import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';
import { Credenciales } from 'src/app/model/credenciales';
import { ConectionService } from 'src/app/services/conection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  cred! : Credenciales;

  constructor( private fb : FormBuilder, private conection : ConectionService, private routin : Router ) {
    this.form= this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
 
   }

  ngOnInit(): void {

  }

  dataForm (){

    this.cred = this.form.value;
    this.conection.loginService(this.cred).subscribe(res=>{
      console.log(res);
      this.routin.navigate(["/"]);
    })
  }

}
