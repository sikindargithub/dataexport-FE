import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      roles: [Role.USER],
    },
    canActivate: [AuthGuard],
  },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
