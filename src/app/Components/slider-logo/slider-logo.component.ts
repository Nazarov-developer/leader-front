import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider-logo',
  templateUrl: './slider-logo.component.html',
  styleUrls: ['./slider-logo.component.scss']
})
export class SliderLogoComponent  {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    navSpeed: 1000,

    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };


  slides = [
    {
      id: '1',
      img: 'assets/2_doshirak-1.png'
    },
    {
      id: '2',
      img: 'assets/1_skorovar-1.png'
    },
    {
      id: '3',
      img: 'assets/10_yantarniy_mir-1.png'
    },
    {
      id: '4',
      img: 'assets/11_dari_yantarya-1.png'
    },
    {
      id: '5',
      img: 'assets/roga.png'
    },
    {
      id: '6',
      img: 'assets/mpir.png'
    },
    {
      id: '7',
      img: 'assets/santa.png'
    },
    {
      id: '8',
      img: 'assets/sav.png'
    },
    {
      id: '9',
      img: 'assets/shap-2.png'
    }
  ];

}
