import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private  myAppUrl="http://localhost:8080/";
 private  myApiUrl="api/v1/employees/"

  constructor( private http:HttpClient) {

  

   }

   getEmployee():Observable<any>{

   return  this.http.get(this.myAppUrl+this.myApiUrl);

  }

  deleteEmployee(id:number):Observable<any>{

    return  this.http.delete(this.myAppUrl+this.myApiUrl+id)
  }

  saveEmployee(employee:any):Observable<any>{

    return this.http.post(this.myAppUrl+this.myApiUrl,employee)
  }


  updateEmployee(id:number,employee:any):Observable<any>{

    return this.http.put(this.myAppUrl+this.myApiUrl+id,employee)
  }
}
