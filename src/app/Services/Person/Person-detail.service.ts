;
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from '../../../environments/environment';
import { Response,PersonDetail } from 'src/app/models/Person-detail.model';

@Injectable({
  providedIn: 'root'
})

export class PersonDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = environment.apiUrl+'api/';
  formData: PersonDetail = new PersonDetail();
  list: PersonDetail[];
  response:Response=new Response();


postPersonDetail() {
  debugger;

  if(localStorage.getItem("Role")=="customer" && localStorage.getItem("customerId"))
  {
    this.formData.customerID=parseInt(localStorage.getItem("customerId"));
  }
  this.formData.cityID=parseInt(this.formData.cityID.toString())
  this.formData.countryID=parseInt(this.formData.countryID.toString())
  this.formData.customerID=parseInt(this.formData.customerID.toString())

  return this.http.post(this.baseURL+"Person/AddPerson", JSON.stringify( this.formData)).toPromise().then(res=>{
   this.refreshList()
  this.formData=new PersonDetail()
  });
}

putPersonDetail() {
  return this.http.post(this.baseURL+"Person/UpdatePerson",JSON.stringify( this.formData));
}

deletePersonDetail(id: number) {
  return this.http.delete(this.baseURL+"Person/DeletePerson?ID="+id).toPromise().then(res=>{
   this.refreshList()
  });
}

  refreshList() {
    var searchModel={};
    var role=localStorage.getItem("Role")
     if(role=="customer")
    {
      searchModel={"customerId":localStorage.getItem("customerId")}
    }

    this.http.post(this.baseURL +"Person/GetPersons",searchModel)
      .toPromise()
      .then((data) => {
        debugger
        this.response=data as Response;
        this.list=this.response.data as PersonDetail[];
      });

  }



}
