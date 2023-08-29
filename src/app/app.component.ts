import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { LoginComponent } from './components/body-components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public dato: any;

  constructor(
    public datos: DataService,
  ){
  }
  
  ngOnInit(){
    console.log(this.datos)
    this.dato = this.datos.allData()
    
  }

}