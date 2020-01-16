import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path:'',
  component:HeaderComponent},
  {path:'detail/:id',
  component:DetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BilRoutingModule { }
