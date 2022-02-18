

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../../environments/environment';
import { Response,PersonDetail } from 'src/app/models/Person-detail.model';
import { AssetModel } from 'src/app/models/asset.model';

@Injectable({
  providedIn: 'root'
})


export class AssetService {

    constructor(private http: HttpClient) { }

    readonly baseURL = environment.apiUrl+'api/';
    formData: AssetModel = new AssetModel();
    list: AssetModel[];
    response:Response=new Response();

    postAsset() {
      debugger;
      this.formData.personId=parseInt(this.formData.personId.toString())
      return this.http.post(this.baseURL+"Assets/AddAsset",JSON.stringify( this.formData)) .toPromise()
      .then((data) => {
        this.formData=new AssetModel()
       this.refreshList();
      });
    }
    
    putAsset() {
      return this.http.post(this.baseURL+"Assets/UpdateAsset", JSON.stringify( this.formData));
    }
    
    deleteAsset(id: number) {
      return this.http.delete(this.baseURL+"Assets/DeleteAsset?ID="+id).toPromise().then(res=>{
        this.refreshList();
      });
    }
    
      refreshList() {
        //check role
        var role=localStorage.getItem("Role")
        var searchModel={};
        if(role=="person"&&localStorage.getItem("personId")&&localStorage.getItem("accessToken"))
        {
          searchModel={"personId":localStorage.getItem("personId")}
        }
       else if(role=="customer"&&localStorage.getItem("customerId")&&localStorage.getItem("accessToken"))
        {
          searchModel={"customerId":localStorage.getItem("customerId")}
        }
        this.http.post(this.baseURL +"Assets/GetAssets",searchModel)
          .toPromise()
          .then((data) => {
            debugger
            this.response=data as Response;
            this.list=this.response.data as AssetModel[];
            console.log(  this.response);
          });
    
      }
}