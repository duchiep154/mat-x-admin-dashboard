import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from './mat-module';
import { GoNextDirective } from '../appDirectives/go-next.directive';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from '../includes/swiper/swiper.module';
import { PromptComponent } from '../includes/popups/prompt/prompt.component';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from '../includes/popups/user-info/user-info.component';
import { CustomSnackBarComponent } from '../utilities/custom-snack-bar/custom-snack-bar.component';

@NgModule({
  declarations: [
    GoNextDirective,
    UserInfoComponent,
    PromptComponent,
    CustomSnackBarComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    SwiperModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MatModule,
    GoNextDirective,
    UserInfoComponent,
    SwiperModule,
    HttpClientModule,
    PromptComponent,
    CustomSnackBarComponent,
    RouterModule
  ],
  providers: [
  ]
})
export class DesignUtilitiesModule {
}
