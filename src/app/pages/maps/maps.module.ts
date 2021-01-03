import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';

const routes: Routes = [
  { path: '', component: MapsComponent }
];



@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU',
      libraries: ['places', 'geometry']
    }),
    AgmDirectionModule
  ]
})
export class MapsModule { }
