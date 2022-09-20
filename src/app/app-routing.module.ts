import { DetailComponent } from './detail/detail.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'card', component: CardComponent},
  {path: 'detail', component: DetailComponent},
  {path: '**', redirectTo:'card', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
