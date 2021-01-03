import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignUtilitiesModule } from 'src/app/appModules/design-utilities.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from 'src/app/appModules/core.module';




@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    DesignUtilitiesModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }