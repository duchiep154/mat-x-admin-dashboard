import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {path : '', component: UserProfileComponent}
];

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes)
  ]
})
export class UserProfileModule { }