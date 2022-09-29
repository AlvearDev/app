import { CITIES } from './../services/in-memory-data.service';
import { Icity, Idepartment } from './../services/Icity';
import { apiService } from './../services/api-service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {
   
 public Cities:        Icity         [] = [];
 public newCities:     Idepartment   [] = [];
 id: number = 1;

  constructor(private _apiService: apiService) { }
  ngOnInit(): void {
   const citiesAgrouped = this.groupById(CITIES, 'departmentId', 'department');
   console.log(citiesAgrouped);
  }
  

  groupById(data: any[], id:string, name?:string) {
    let nuevoArray:any  = [];
    let arrayTemporal:any = [];
    for(let i= 0; i< data.length; i++){
	    arrayTemporal = nuevoArray.filter((resp:any) => resp["ID"] === data[i][id])
	    if(arrayTemporal.length>0){
	        nuevoArray[nuevoArray.indexOf(arrayTemporal[0])]["ROWS"].push(data[i])
	    }else{
	        nuevoArray.push({"ID" : data[i][id] ,"NAME" : data[i][name || id], "ROWS" : [data[i]]})
	    }
	  }
    return nuevoArray;
  } 
}
