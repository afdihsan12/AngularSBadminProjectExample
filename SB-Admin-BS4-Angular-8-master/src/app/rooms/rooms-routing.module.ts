import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchroomsComponent } from './searchrooms/searchrooms.component';

const routes: Routes = [
  {path:'',
  component:ListComponent},
  {
    path:'search/:code',
    component:SearchroomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
