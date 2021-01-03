import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';

const routes: Routes = [
  { path: '', component: TablesComponent }
];



@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes)
  ]
})
export class TablesModule { }
