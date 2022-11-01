import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public datos: DataService,
  ){}

  public dato: any;


  ngOnInit(){
    console.log(this.datos)
    this.dato = this.datos.allData()
  }

}
