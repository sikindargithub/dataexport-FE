import {
  NgModule,
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProjectService } from './services/project.service';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AuthModule } from './auth/auth.module';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HomeComponent,
    NavBarComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
