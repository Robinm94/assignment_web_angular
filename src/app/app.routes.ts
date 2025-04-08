import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ApipageComponent } from './apipage/apipage.component';
import { FormpageComponent } from './formpage/formpage.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomepageComponent },
  { path: 'api', title: 'API', component: ApipageComponent },
  { path: 'form', title: 'Form', component: FormpageComponent },
];
