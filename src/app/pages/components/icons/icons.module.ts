import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';
import { IconsComponent } from './icons.component';

const routes: Routes = [
  {path : '', component: IconsComponent}
];

@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes)
  ]
})
export class IconsModule { }