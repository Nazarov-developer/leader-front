import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NasheKredoComponent } from './Components/nashe_kredo/nashe-kredo.component';
import { GeografiyaProdazhComponent } from './Components/geografiya_prodazh/geografiya-prodazh.component';
import { PartneryComponent } from './Components/partnery/partnery.component';
import {KontaktyComponent} from './Components/kontakty/kontakty.component';
import {NewsComponent} from './Components/news/news.component';
import {NewsDetailComponent} from './Components/news-detail/news-detail.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'nashe_kredo',
    component: NasheKredoComponent,
  },
  {
    path: 'geografiya_prodazh',
    component: GeografiyaProdazhComponent,
  },
  {
    path: 'partnery',
    component: PartneryComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'kontakty',
    component: KontaktyComponent,
  },
  {
    path: 'news_detail',
    component: NewsDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
