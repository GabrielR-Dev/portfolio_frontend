import { Component, Input, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/services/conection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  // datos que vienen desde AppComponent
  @Input() datos = {
    idSeccion:"",
    dataSeccion:{}
  }
  public dato:any;

  constructor(private conection : ConectionService){}
  
  

  ngOnInit(){
    this.conection.dataHeader();
  }
  
  
}
