import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SliderComponent } from './Components/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AnimatedNumberComponent } from './Components/animated-number/animated-number.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderLogoComponent } from './Components/slider-logo/slider-logo.component';
import { MenuComponent } from './Components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PartneryComponent } from './Components/partnery/partnery.component';
import { NasheKredoComponent } from './Components/nashe_kredo/nashe-kredo.component';
import { GeografiyaProdazhComponent } from './Components/geografiya_prodazh/geografiya-prodazh.component';
import { KontaktyComponent } from './Components/kontakty/kontakty.component';
import { NewsComponent } from './Components/news/news.component';
import { NewsDetailComponent } from './Components/news-detail/news-detail.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    AnimatedNumberComponent,
    SliderLogoComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    NasheKredoComponent,
    GeografiyaProdazhComponent,
    PartneryComponent,
    KontaktyComponent,
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    CarouselModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
