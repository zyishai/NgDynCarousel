import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'ng-carousel',
  templateUrl: './ngx-carousel.component.html',
  styleUrls: ['./ngx-carousel.component.css']
})
export class NgDynamicCarouselComponent implements OnInit {
  @Input() images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/250/310',
    'https://picsum.photos/100/150',
    'https://picsum.photos/400/220',
    'https://picsum.photos/200/300',
  ];
  @Input('startsAt') current = 0; // index (in the images array) of the current displayed image.
  @Input() imagesPerPage = 2;
  @Input() imageWidth = 10;
  @Input() imageGap = 10;
  @Input() containerHeight = 20;
  @Input() units = 'rem';

  @Input('carouselStyle') _carouselStyle;
  @Input() _itemStyle = {};
  @Input() _buttonStyle = {};
  @Input() _buttonsContainerStyle = {};
  
  private baseSize;
  public carouselStyle: any;
  public imageStyle;
  @HostBinding('style.width') width;
  @HostBinding('style.height') height;


  ngOnInit() {
    this.baseSize = this.imageGap + this.imageWidth;
    this.carouselStyle = {
      ...this._carouselStyle,
      'gap': `${this.imageGap}${this.units}`
    };
    this.imageStyle = {
      ...this._itemStyle,
      'width': `${this.imageWidth}${this.units}`
    };
    this.width = `${this.imagesPerPage*this.baseSize}${this.units}`;
    this.height = `${this.containerHeight}${this.units}`;
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    // width of images_per_page + width of spaces_between_images
    const totalWidth = this.imagesPerPage*this.imageWidth + (this.imagesPerPage-1)*this.imageGap;
    this.carouselStyle = {
      ...this.carouselStyle,
      'left': `calc(${50}% - ${totalWidth/2}${this.units} - ${this.current*(this.imageWidth+this.imageGap)}${this.units})`
    }
  }

  public prev() {
    if (this.current > 0) {
      this.current -= this.imagesPerPage;
    }

    this.setCurrentStyles();
  }

  public next() {
    if (this.current+this.imagesPerPage <= this.images.length-1) {
      this.current += this.imagesPerPage;
    }

    this.setCurrentStyles();
  }
}
