import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @Input() options: any;
  @Input() id: any;
  @Input() loadDelay:any = 1;

  mySwiper: Swiper;
  // slides = [
  //   'https://via.placeholder.com/300x200/FF5733/ffffff',
  //   'https://via.placeholder.com/300x200/C70039/ffffff',
  //   'https://via.placeholder.com/300x200/900C3F/ffffff'
  // ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
    // For Normal Carousel
    this.initCarousel();
     
  }
  initCarousel() {
    setTimeout(() => {
      this.mySwiper = new Swiper(('#'+this.id), this.options);
      // this.mySwiper = new Swiper('.swiper-container', {
      //   // Optional parameters
      //   direction: 'vertical',
      //   loop: true,
      
      //   // If we need pagination
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      
      //   // Navigation arrows
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      
      //   // And if we need scrollbar
      //   scrollbar: {
      //     el: '.swiper-scrollbar',
      //   },
      // });
  
      // init Swiper:
    }, this.loadDelay*1000);
  }

  destroy() {
    // $(this.slider.nativeElement).owlCarousel('destroy');
  }

  ngOnDestroy(): void {
    // this.destroy();
  }

}
