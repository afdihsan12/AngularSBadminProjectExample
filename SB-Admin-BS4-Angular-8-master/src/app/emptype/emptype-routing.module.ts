import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListemptypeComponent } from './listemptype/listemptype.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:ListemptypeComponent
  },
  {
    path:'search/:name',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptypeRoutingModule { }
