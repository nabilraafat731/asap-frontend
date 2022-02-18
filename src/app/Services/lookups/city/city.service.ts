

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../../../environments/environment';
import { Response,PersonDetail } from 'src/app/models/Person-detail.model';
import { AssetModel } from 'src/app/models/asset.model';
import { LookupModel } from 'src/app/models/lookup.model';

@Injectable({
  providedIn: 'root'
})


export class CityService {

    constructor(private http: HttpClient) { }

    readonly baseURL = environment.apiUrl+'api/';
    formData: LookupModel = new LookupModel();
    list: LookupModel[];
    response:Response=new Response();

    postCity() {
      debugger;
     
      return this.http.post(this.baseURL+"City/AddCity",JSON.stringify( this.formData)) .toPromise()
      .then((data) => {
        this.formData=new AssetModel()
       this.refreshList(null);
      });
    }
    
    putCity() {
      return this.http.post(this.baseURL+"City/UpdateCity", JSON.stringify( this.formData));
    }
    
    deleteCity(id: number) {
      return this.http.delete(this.baseURL+"City/DeleteCity?ID="+id).toPromise().then(res=>{
        this.refreshList(null);
      });
    }
    
      refreshList(countryId) {
        var model={"CountryId":countryId};
        this.http.post(this.baseURL +"City/GetCities",model)
          .toPromise()
          .then((data) => {
            debugger
            this.response=data as Response;
            this.list=this.response.data as LookupModel[];
            console.log(  this.response);
          });
    
      }
}