import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './appModules/core.module';
import { DesignUtilitiesModule } from './appModules/design-utilities.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    DesignUtilitiesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
