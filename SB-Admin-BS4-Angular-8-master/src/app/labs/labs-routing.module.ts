import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListlabsComponent } from './listlabs/listlabs.component';
import { SearchlabsComponent } from './searchlabs/searchlabs.component';

const routes: Routes = [
  {
    path:'',
    component:ListlabsComponent
  },
  {
    path:'search/:code',
    component:SearchlabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabsRoutingModule { }
