import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ViewComponent } from './pages/view/view.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import {HeroesRoutingModule} from "./heroes-routing.module";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ViewComponent,
    HomeComponent,
    ListComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
