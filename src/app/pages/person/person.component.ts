import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { CityService } from 'src/app/Services/lookups/city/city.service';
import { CountryService } from 'src/app/Services/lookups/country/country.service';
import { PersonDetailService } from 'src/app/Services/Person/Person-detail.service';


@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy {
  constructor(public customerService:CustomerService,public cityService:CityService,public countryService:CountryService,public personService:PersonDetailService,private router:Router) {}


  public showCustomer:boolean=false;

  ngOnInit() {
    this.personService.refreshList();
    this.countryService.refreshList();
    this.customerService.refreshList();
    if(localStorage.getItem("Role")=="admin")
     this.showCustomer=true;
  }

 
   addPerson()
   {
    console.log(this.personService.formData)
    this.personService.postPersonDetail();
   }

   deletePerson(personId)
   {
    this.personService.deletePersonDetail(personId);
   }

   getCountryCity(countryId)
   {
      this.cityService.refreshList(countryId)
   }
  ngOnDestroy() {
    this.customerService.list=[];
    this.personService.list=[];
    this.cityService.list=[];
    this.countryService.list=[];

  }

}
