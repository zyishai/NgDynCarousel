# Ng Dynamic Carousel

Dynamic carousel component for Angular.

 ## Installation

 * Run `npm install ng-dynamic-carousel --save` or `yarn add ng-dynamic-carousel --save`.
 * Add `NgDynamicCarouselModule` in your `imports` array.
 * Use `<ng-carousel></ng-carousel>` in your HTML template.
 * Enjoy! 😄

## Configuration

| Prop Name | Type | Note | Default |
| - | - | - | - |
| `images` | string[] | List of images urls. | |
| `startsAt` | number | Index of the first image to start from. | 0 |
| `imagesPerPage` | number | | 2 |
| `imageWidth` | number | | 10 |
| `imageGap` | number | | 10 |
| `containerHeight` | number | | 20 |
| `units` | string | | rem |


 ## Example Usage

_feature.module.ts_
 ```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDynamicCarouselModule } from 'ng-dynamic-carousel';

import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    NgDynamicCarouselModule
  ],
})
export class FeatureModule { }

 ```

_feature.component.html_
```html
<h1>My Travel</h1>

<ng-carousel imagesPerPage="3"></ng-carousel>
```
 