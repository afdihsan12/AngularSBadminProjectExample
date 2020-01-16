import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListlabsratesComponent } from './listlabsrates/listlabsrates.component';
import { SearchlabsratesComponent } from './searchlabsrates/searchlabsrates.component';

const routes: Routes = [
  {path:'',
  component:ListlabsratesComponent},
  {
    path:'search/:by/:code',
    component:SearchlabsratesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabsratesRoutingModule { }
