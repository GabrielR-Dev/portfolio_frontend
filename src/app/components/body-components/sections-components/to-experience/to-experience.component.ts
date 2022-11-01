import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-to-experience',
  templateUrl: './to-experience.component.html',
  styleUrls: ['./to-experience.component.scss']
})
export class ToExperienceComponent implements OnInit {

  // datos que vienen desde AppComponent
  @Input() datos = {
    idSeccion:"",
    dataSeccion:[]
  }

  
  ngOnInit(): void {
    console.log(this.datos)
  }

}
