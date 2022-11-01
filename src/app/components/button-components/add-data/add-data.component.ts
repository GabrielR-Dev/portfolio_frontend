import { Component, Input, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/services/conection.service';
import { ValidationsFormsService } from 'src/app/services/validations-forms.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {


  public modalV:boolean= false;
  public dato : any;
  public d : any;


  // Importacion de datos recividos desde la appComponent
  @Input() datos : any ;
  // @Input() datos ={
  //   idSeccion:"",
  //   dataSeccion:[],
  // };
      

  constructor(
    public conection: ConectionService,
    // Importacion servicio de clases para formularios
    public validationForms : ValidationsFormsService
  ) { }
    
    
  ngOnInit(): void {
    this.d = this.datos['dataSeccion'];
    this.dato = this.d['0'];


    // Validaciones con el servicio
    this.validationForms.validationForm(this.dato)
  }




  viewModal(){
    this.modalV = !this.modalV;
  }
  
  
  addData(){

  }

  close(){
    this.modalV = false;
    this.validationForms.resetValidations()
  }

}

