import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class DataService {

  public all: Array<any>=[];

  allData(){

    return this.all= [
      {
        idSeccion:"header",
        dataSeccion:
          {
            titulo:"Lo unico imposible es aquello que no intentas",
          }
      
      },
      {
        idSeccion:"about",
        dataSeccion:
          {
            titulo:"Esto es mas sobre Mi",
            img:"",
            p:"ACA SOLO AHI UN DATO.... Un Lorem Ipsu hndiadnihswndhwnrhnhrnen we dwhe uhwe whehweh wewe w e whrwrh jr jr rh ehe ",
          }
        
      },
      {
        idSeccion:"proyects",
        dataSeccion:[
          {
            idArticulo: 1, 
            titulo: "Proyecto 1",
            img:"",
            p:"Un lorem ipsu uagbduw hwiw r iefrheefr eflskdmlsdehf j ef  hw rkr ker h wjr h   erf",
            link:"#"
          },
          {
            idArticulo: 2, 
            titulo: "Proyecto 2",
            img:"",
            p:"Un lorem ipsu uagbduw hwiw r iefrheefr eflskdmlsdehf j ef  hw rkr ker h wjr h   erf",
            link:"#"

          },
          {
            idArticulo: 3,
            titulo: "Proyecto 3",
            img:"",
            p:"Un lorem ipsu uagbduw hwiw r iefrheefr eflskdmlsdehf j ef  hw rkr ker h wjr h   erf",
            link:"#"

          },
        ]
      },
      {
        idSeccion:"skill",
        dataSeccion:[
          {
            idArticulo: 1,
            porcentaje: 200,
            titulo: "React",
            img:"#"
          },
          {
            idArticulo: 2,
            porcentaje: 700,
            titulo: "Angular",
            img:"#"
          },
          {
            idArticulo: 3,
            porcentaje: 700,
            titulo: "Angular",
            img:"#"
          },
          {
            idArticulo: 4,
            porcentaje: 700,
            titulo: "Angular",
            img:"#"
          },
        ]
      },
      {
        idSeccion:"experience",
        dataSeccion:[
          {
            idArticulo:1,
            titulo:"Este es una Experiencia",
            img: "",
            p:"AJNAINDNSDN      jksdsdsyhdan edwd hw dhnwdjcmlw wndiw nwjdwj wjd w dkwe whr hwer we hw rhwr we w",
          },
          {
            idArticulo:2,
            titulo:"Este es una Experiencia",
            img: "",
            p:"AJNAINDNSDN      jksdsdsyhdan edwd hw dhnwdjcmlw wndiw nwjdwj wjd w dkwe whr hwer we hw rhwr we w",
          },
          {
            idArticulo:3,
            titulo:"Este es una Experiencia",
            img: "",
            p:"AJNAINDNSDN      jksdsdsyhdan edwd hw dhnwdjcmlw wndiw nwjdwj wjd w dkwe whr hwer we hw rhwr we w",
          },
        ]
      },
    ]
  }





  

}
