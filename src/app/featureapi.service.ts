import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeatureapiService {


  constructor(private http:HttpClient) { }

  createNewFeature(data) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put('http://localhost:8080/feature/request/newRequest',data,{headers});
   
  }

  getAllRequestedFeatures(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
      return this.http.get('http://localhost:8080/feature/request/getAllClients',{headers});

  }

  getAllRequestedFeaturesByClient(clientName){

    let params = new HttpParams();
    params.set('client',clientName);
      this.http.get('http://localhost:8080/feature/request/getByClient?${params.toString}').subscribe((response)=>{
        console.warn("response",response);
      }) 
  }
}
