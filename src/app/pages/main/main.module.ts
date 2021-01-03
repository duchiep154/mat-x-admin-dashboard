import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';
import { ChartModule } from 'src/app/utilities/charts/chart.module';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path : '', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    ChartModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }