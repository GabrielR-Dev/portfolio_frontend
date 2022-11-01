import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  // datos que vienen desde AppComponent
  // @Input() datos = [{
  //   idArticulo: 0, 
  //   titulo: "",
  //   img:"",
  //   p:"",
  //   link:""
  // }]
  @Input() datos = {
    idSeccion:"",
    dataSeccion:[]
  }
  
  public dato: any;

  ngOnInit(): void {
    this.dato = this.datos['dataSeccion']
  }

}
