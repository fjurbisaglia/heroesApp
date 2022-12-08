import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./pages/list/list.component";
import {AddComponent} from "./pages/add/add.component";
import {SearchComponent} from "./pages/search/search.component";
import {HeroesComponent} from "./pages/heroes/heroes.component";
import {HomeComponent} from "./pages/home/home.component";

//Here the parent route is Home Component, and the rest are children. HomeComponent will be always visible.

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'list', component: ListComponent},
      {path: 'add', component: AddComponent},
      {path: 'edit/:id', component: AddComponent},
      {path: 'search', component: SearchComponent},
      {path: ':id', component: HeroesComponent},
      {path: '**', redirectTo: 'list'},
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}
