import { Component,Input, OnInit } from '@angular/core';
import { ConectionService } from 'src/app/services/conection.service';
import { ValidationsFormsService } from 'src/app/services/validations-forms.service';



@Component({
  selector: 'app-edition-profile',
  templateUrl: './edition-profile.component.html',
  styleUrls: ['./edition-profile.component.scss']
})
export class EditionProfileComponent implements OnInit{


  constructor(
    public conection:ConectionService,
    public validationForms : ValidationsFormsService
  ) { }

      


    
    
  @Input() datos :any;
  // @Input() datos = {

  //   idSeccion:"",
  //   dataSeccion: {} ,
  // };

  @Input() dato : any ;
  // @Input() dato : any = {
  //   idArticulo: 0,
  //   titulo:" ",
  //   img: "",
  //   descripcion: "",
  //   porcentaje: 0,
  //   p:"",
  //   link:""
  // };


  modalV:boolean= false;
    

    
    
  ngOnInit(): void {


  }
  
  
  editData(){

    // Validaciones con el servicio
    this.validationForms.validationForm(this.dato);

    this.modalV = !this.modalV;



  }

  deleteData(id: string){

    this.modalV = !this.modalV;
    alert("Seguro deceas eliminar el dato con id "+ id);

  }

  close(){
    this.modalV = false;
    this.validationForms.resetValidations();
  }

}

