import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchmedrecComponent } from './searchmedrec/searchmedrec.component';

const routes: Routes = [
  {path:'',
  component:ListComponent},
  {
    path:'search/:by/:id',
    component:SearchmedrecComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedrecRoutingModule { }
