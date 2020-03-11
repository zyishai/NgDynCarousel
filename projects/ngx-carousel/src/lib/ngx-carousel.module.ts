import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDynamicCarouselComponent } from './ngx-carousel.component';

@NgModule({
  declarations: [NgDynamicCarouselComponent],
  imports: [
    CommonModule
  ],
  exports: [NgDynamicCarouselComponent]
})
export class NgDynamicCarouselModule { }
