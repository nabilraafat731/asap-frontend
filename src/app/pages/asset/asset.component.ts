import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/Services/asset/asset.service';
import { PersonDetailService } from 'src/app/Services/Person/Person-detail.service';


@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit, OnDestroy {
  constructor(public personService:PersonDetailService,public assetService:AssetService,private router:Router) {}

  public role:string="";

  ngOnInit() {
    this.assetService.refreshList();
    this.personService.refreshList();
    this.role=localStorage.getItem("Role");
  }

 
   addAsset()
   {
    this.assetService.postAsset();
   }
   deleteAsset(assetId)
   {
    this.assetService.deleteAsset(assetId);

   }
  ngOnDestroy() {
    this.personService.list=[];
    this.assetService.list=[];
  }

}
