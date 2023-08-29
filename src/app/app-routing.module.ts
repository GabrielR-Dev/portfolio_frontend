import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/body-components/form/form.component';
import { AboutComponent } from './components/body-components/sections-components/about/about.component';
import { ProyectsComponent } from './components/body-components/sections-components/proyects/proyects.component';
import { SoftSkillsComponent } from './components/body-components/sections-components/soft-skills/soft-skills.component';
import { ToExperienceComponent } from './components/body-components/sections-components/to-experience/to-experience.component';
import { LoginComponent } from './components/body-components/login/login.component';

const routes: Routes = [
  {path:"",component:AboutComponent},
  {path:"about", component:AboutComponent},
  {path:"proyectos", component:ProyectsComponent},
  {path:"skills", component:SoftSkillsComponent},
  {path:"experiencia", component:ToExperienceComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
