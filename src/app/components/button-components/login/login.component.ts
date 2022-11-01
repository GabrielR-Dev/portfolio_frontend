import { Component, OnInit} from '@angular/core';
import { ConectionService } from 'src/app/services/conection.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    public conection: ConectionService
  ){}

  public titulo:string = "Login";

  form : boolean = false;

  ngOnInit(){
    if(this.conection.isConnect){
      this.titulo = "Sign off"
    }

  }

  viewLogin(){
    this.form = !this.form;
  }



}
