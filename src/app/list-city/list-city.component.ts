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
 public newCities:     Idepartment   [] = []

  constructor(private _apiService: apiService) { }
  ngOnInit(): void {
   this.dataCities()
  }
  dataCities(){
    this._apiService
    .Get('cities')
    .subscribe((res)=>{
       this.Cities = res
       this.group(this.Cities)
    })
  }
  group(Cities: Icity[]){
    var nuevoArray  = []
    var arrayTemporal = []
    for(var i=0; i<Cities.length; i++){
	    arrayTemporal = nuevoArray.filter(resp => resp["name"] == Cities[i]["department"])
	    if(arrayTemporal.length>0){
	        nuevoArray[nuevoArray.indexOf(arrayTemporal[0])]["cities"].push(Cities[i]["name"])
	    }else{
	        nuevoArray.push({"name" : Cities[i]["department"] , "cities" : [Cities[i]["name"]]})
	    }
	  }
    this.newCities = nuevoArray
  }
}