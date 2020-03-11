import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDynamicCarouselModule } from 'ng-dynamic-carousel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDynamicCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
