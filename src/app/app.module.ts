import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// Importacion del Header y Footer
import { FooterPagComponent } from './components/body-components/footer-pag/footer-pag.component';
import { HeaderComponent } from './components/body-components/header/header.component';


//Importacion de las secciones 
import { AboutComponent } from './components/body-components/sections-components/about/about.component';
import { ToExperienceComponent } from './components/body-components/sections-components/to-experience/to-experience.component';
import { SoftSkillsComponent } from './components/body-components/sections-components/soft-skills/soft-skills.component';
import { ProyectsComponent } from './components/body-components/sections-components/proyects/proyects.component';

//Importacion de botones
import { EditionProfileComponent } from './components/button-components/button-edition-profile/edition-profile.component';
import { AddDataComponent } from './components/button-components/add-data/add-data.component';
import { LoginComponent } from './components/button-components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    // Header y Footer
    HeaderComponent, FooterPagComponent,
  
    //Secciones del body
    AboutComponent,
    ToExperienceComponent,
    SoftSkillsComponent,
    ProyectsComponent,

    // Botones
    EditionProfileComponent,
     AddDataComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



  

}
