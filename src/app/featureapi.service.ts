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

    this.http.put('http://localhost:8080/feature/request/newRequest',data,{headers}).subscribe((result)=> {
      console.warn("result",result);
    })
    this.getAllRequestedFeatures();
  }

  getAllRequestedFeatures(){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
      this.http.get('http://localhost:8080/feature/request/getAllClients',{headers}).subscribe((response)=>{
        console.warn("response",response);
      })
      this.getAllRequestedFeaturesByClient("client A");
  }

  getAllRequestedFeaturesByClient(clientName){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const params = new HttpParams();
    params.set('client',clientName);
      this.http.get('http://localhost:8080/feature/request/getByClient?${params.toString}',{headers}).subscribe((response)=>{
        console.warn("response",response);
      })

    
  }
}
