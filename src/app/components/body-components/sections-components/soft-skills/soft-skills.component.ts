import { Component, Input, OnInit } from '@angular/core';
// import { DataSection, DataSkill } from 'src/app/models/data-section';
// import { DataDbService } from 'src/app/services/data-db.service';
// import { EventSectionService } from 'src/app/services/event-section.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  // datos que vienen desde AppComponent
  @Input() datos = {
    idSeccion:"",
    dataSeccion:[]
  }

  ngOnInit(): void {

    console.log(this.datos)

  }

}


