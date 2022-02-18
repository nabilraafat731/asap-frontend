

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../../../environments/environment';
import { Response } from 'src/app/models/Person-detail.model';
import { LookupModel } from 'src/app/models/lookup.model';


@Injectable({
  providedIn: 'root'
})


export class CountryService {

    constructor(private http: HttpClient) { }

    readonly baseURL = environment.apiUrl+'api/';
    formData: LookupModel = new LookupModel();
    list: LookupModel[];
    response:Response=new Response();

    postCountry() {
      debugger;
      
      return this.http.post(this.baseURL+"Country/AddCountry",JSON.stringify( this.formData)) .toPromise()
      .then((data) => {
        this.formData=new LookupModel()
       this.refreshList();
      });
    }
    
    putCountry() {
      return this.http.post(this.baseURL+"Country/UpdateCountry", JSON.stringify( this.formData));
    }
    
    deleteCountry(id: number) {
      return this.http.delete(this.baseURL+"Country/DeleteCountry?ID="+id).toPromise().then(res=>{
        this.refreshList();
      });
    }
    
      refreshList() {
      
        this.http.get(this.baseURL +"Country/GetCountries")
          .toPromise()
          .then((data) => {
            debugger
            this.response=data as Response;
            this.list=this.response.data as LookupModel[];
            console.log(  this.response);
          });
    
      }
}