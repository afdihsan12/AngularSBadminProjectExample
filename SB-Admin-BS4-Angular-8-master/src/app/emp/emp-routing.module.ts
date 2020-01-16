import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListempComponent } from './listemp/listemp.component';
import { FormemployeeComponent } from './formemployee/formemployee.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: ListempComponent
  },
  {path:'search/:search/:name',
  component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
