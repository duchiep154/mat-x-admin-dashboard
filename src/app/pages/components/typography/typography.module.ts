import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {path : '', component: TypographyComponent}
];

@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes)
  ]
})
export class TypographyModule { }