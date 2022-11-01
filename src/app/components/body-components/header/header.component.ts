import { Component, Input, OnInit } from '@angular/core';

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
  public dato:any ;
  
  
  display : boolean = false;

  ngOnInit(){
    this.dato = this.datos['dataSeccion'];
    
    
    console.log(this.datos)
    
  }
  
  displayNav(e:Event){
    this.display = !this.display;

  }
  
}
