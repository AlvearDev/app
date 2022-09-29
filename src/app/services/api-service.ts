import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Icity, Idepartment } from './Icity';

@Injectable({
    providedIn: 'root'
  })
  
  export class apiService {
    private BaseURL = 'api/'

    constructor(
      private http: HttpClient
      ) { }
      Get(route: string):Observable<any[]>{
           return   this.http.get<any[]>(this.BaseURL + route) 
      }
      GetCity(route: string , id: number):Observable<any>{
        let url = `${this.BaseURL}/${route}/${id}`;
        return   this.http.get<any>(url) 
   } 
    }
        
      
    