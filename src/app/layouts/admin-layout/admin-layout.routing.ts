import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AssetComponent } from '../../pages/asset/asset.component';
import { CustomerComponent } from 'src/app/pages/customer/Customer.component';
import { PersonComponent } from 'src/app/pages/person/person.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'Assets',          component: AssetComponent },
    { path: 'Customer',          component: CustomerComponent },
    { path: 'Person',          component: PersonComponent },
];
