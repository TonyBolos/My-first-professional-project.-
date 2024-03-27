import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuCompComponent } from './menu-comp/menu-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { Category1CompComponent } from './category1-comp/category1-comp.component';
import { Category2CompComponent } from './category2-comp/category2-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { Bmw8seriesCompComponent } from './bmw8series-comp/bmw8series-comp.component';
import { Bmwi4m5oCompComponent } from './bmwi4m5o-comp/bmwi4m5o-comp.component';
import { Bmwi7CompComponent } from './bmwi7-comp/bmwi7-comp.component';
import { BmwixCompComponent } from './bmwix-comp/bmwix-comp.component';
import { Bmwix3CompComponent } from './bmwix3-comp/bmwix3-comp.component';
import { Bmwm4coupeCompComponent } from './bmwm4coupe-comp/bmwm4coupe-comp.component';
import { Bmwseries1CompComponent } from './bmwseries1-comp/bmwseries1-comp.component';
import { Bmwx6CompComponent } from './bmwx6-comp/bmwx6-comp.component';


const routes: Routes = [
  {
  path: 'menu-comp_path',
  component: MenuCompComponent
  },
  {
  path: 'main-comp_path',
  component: MainCompComponent
  },
  {
  path: 'footer-comp_path',
  component: FooterCompComponent
  },
  {
  path: 'category1-comp_path',
  component: Category1CompComponent
  },
  {
  path: 'category2-comp_path',
  component: Category2CompComponent
  },
  {
    path: 'bmwix_path',
    component: BmwixCompComponent
  },
  {
    path: 'bmwI7_path',
    component: Bmwi7CompComponent
  },
  {
    path: 'bmwI4M5o_path',
  component: Bmwi4m5oCompComponent
  },
  {
    path: 'bmwIX3_path',
  component: Bmwix3CompComponent
  }
  ,
  {
    path: 'bmwM4Coupe_path',
  component: Bmwm4coupeCompComponent
  }
  ,
  {
    path: 'bmwseries1_path',
  component: Bmwseries1CompComponent
  }
  ,
  {
    path: 'bmw8series_path',
  component: Bmw8seriesCompComponent
  }
  ,
  {
    path: 'bmwX6_path',
  component: Bmwx6CompComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuCompComponent,
    FooterCompComponent,
    MainCompComponent,
    Category1CompComponent,
    Category2CompComponent,
    Bmw8seriesCompComponent,
    Bmwi4m5oCompComponent,
    Bmwi7CompComponent,
    BmwixCompComponent,
    Bmwix3CompComponent,
    Bmwm4coupeCompComponent,
    Bmwseries1CompComponent,
    Bmwx6CompComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
