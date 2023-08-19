import { Component, OnInit } from '@angular/core';
import { GetServicesService } from '../get-services.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{
  

  
   Persons : any = [];

  constructor( private _GetServices: GetServicesService){}
  
  ngOnInit() {
      this._GetServices.getData().subscribe(data =>this.Persons = data)
       console.log(this.Persons)
  }



}
