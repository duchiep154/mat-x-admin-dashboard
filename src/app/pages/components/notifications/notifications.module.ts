import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsComponent } from './notifications.component';
import { RouterModule, Routes } from '@angular/router';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';

const routes: Routes = [
  {path : '', component: NotificationsComponent}
];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationsModule { }
