import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
