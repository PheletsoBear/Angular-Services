import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonData } from './PersonModel';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

 
  private var : string = 'assets/JsonData/PersonData.json'

  constructor( private _Http : HttpClient) { }

      
  
   getData (): Observable <PersonData[]> {
 
    
      return this._Http.get<PersonData[]>(this.var)
}
}
