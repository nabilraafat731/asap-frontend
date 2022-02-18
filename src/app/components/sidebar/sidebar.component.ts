import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role:string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', role:"customer,admin,person", icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/Assets', title: 'Assets',  role:"customer,admin,person", icon:'ni-tv-2 text-primary', class: '' },
    { path: '/Customer', title: 'Customers', role:"admin" , icon:'ni-tv-2 text-primary', class: '' },
    { path: '/Person', title: 'Persons',  role:"admin,customer", icon:'ni-tv-2 text-primary', class: '' },
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    var roler = localStorage.getItem("Role");
    this.menuItems = ROUTES.filter(menuItem => {if(menuItem.role.includes(roler)) return menuItem});

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
