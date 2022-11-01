import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  constructor() { }

  public isConnect:boolean = true;
}
