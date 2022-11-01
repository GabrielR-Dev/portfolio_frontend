import { Component, Input, OnInit } from '@angular/core';


// Importacion de la interfas para utilizar con los datos ingresados con el input
import { InterfasDatos } from 'src/app/model/data-models';




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  // datos que vienen desde AppComponent
  @Input() datos = {
    idSeccion:"",
    dataSeccion:{}
  }

  public dato:any;
  
  
  constructor(){}
  
  
  ngOnInit(): void {

    this.dato = this.datos['dataSeccion']

    //Separo el {} dataSeccion para poder utilizarlo en el html
    // this.dato = this.datos['dataSeccion'];
    console.log(this.datos)
  }
  

}
