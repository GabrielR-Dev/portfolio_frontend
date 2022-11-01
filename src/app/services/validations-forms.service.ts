import { Injectable } from '@angular/core';
// import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidationsFormsService {
  
  public validation? :boolean;
  public formData!: FormGroup;
  
  
  
  constructor(
    private formBuilder : FormBuilder,
  ) { }
  
  validationForm(d: any){
    
    this.formData = this.formBuilder.group({
      titulo: [d['titulo'],[Validators.required,Validators.minLength(4)]],
      img: [d['img'],[]],
      porcentaje: [d['porcentaje'],[Validators.required,Validators.max(100),Validators.min(1)]],
      link: [d['link'],[Validators.required,]],
      p: [d['p'],[Validators.required,Validators.minLength(30)]],
    });
  
  }

  public isValidateTitulo:string | undefined;
  public isValidateP:string | undefined;
  public isValidatePorcentaje: string | undefined;
  public isValidateLink:string | undefined;

  addDataForm(d : any) {
    console.log(this.formData.value)
    console.log(d)

    
    this.isValidateTitulo = "";
    this.isValidateP = "";
    this.isValidateLink = "";
    this.isValidatePorcentaje = "";

    // Validaciones para Titulo
    if(this.formData.get('titulo')?.errors?.['required']){
      this.isValidateTitulo = "Debes ingresar un Titulo.";
      // return false;
    }
    if(this.formData.get('titulo')?.errors?.['minlength']){
      this.isValidateTitulo = "El titulo debe tener al menos 4 caracteres.";
      // return false;
    }

    // Validaciones para P ya esta
    if(this.formData.get('p')?.errors?.['required']){
      this.isValidateP = "Debes ingresar una Descripcion";
      // return false;
    }
    if(this.formData.get('p')?.errors?.['minlength']){
      this.isValidateP = "Descripcion debe tener al menos 30 caracteres.";
      // return false;
    }

    // Validaciones para Porcentaje
    if(this.formData.get('porcentaje')?.errors?.['min'] &&  this.formData.get('porcentaje')?.errors?.['max']){
      this.isValidatePorcentaje = "Debes ingresar un porcentaje de entre 1 y 10";
      // return false;
    }

    // Validaciones para Link
    if(this.formData.get('link')?.errors?.['required']){
      this.isValidateLink = "Debes ingresar un Link.";
      // return false;
    }
    // return true;
  }

  resetValidations(){
    this.isValidateTitulo = "";
    this.isValidateP = "";
    this.isValidateLink = "";
    this.isValidatePorcentaje = "";
    this.formData.reset();

  }

}
