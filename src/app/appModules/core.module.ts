import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../includes/header/header.component';
import { ThemeSwitchComponent } from '../includes/theme-switch/theme-switch.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MatModule } from './mat-module';
import { DesignUtilitiesModule } from './design-utilities.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LandingComponent } from '../pages/landing/landing.component';
import { FooterComponent } from '../includes/footer/footer.component';
import { NotificationMenuComponent } from '../includes/popups/notification-menu/notification-menu.component';

@NgModule({
    declarations : [
        ThemeSwitchComponent,
        HeaderComponent,
        LandingComponent,
        FooterComponent,
        NotificationMenuComponent
    ],
    imports : [
        CommonModule,
        HttpClientModule,
        DesignUtilitiesModule,
        LoadingBarRouterModule,
        LoadingBarHttpClientModule,
        MatModule,
        NgxSkeletonLoaderModule
    ],
    exports : [
        DesignUtilitiesModule,
        LoadingBarRouterModule,
        ThemeSwitchComponent,
        LandingComponent,
        FooterComponent,
        HeaderComponent,
        NotificationMenuComponent,
        MatModule,
        NgxSkeletonLoaderModule
    ]
})
export class CoreModule{

}
