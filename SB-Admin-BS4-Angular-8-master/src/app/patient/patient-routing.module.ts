import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpatientComponent } from './listpatient/listpatient.component';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';

const routes: Routes = [
  {
    path:'',
    component:ListpatientComponent
  },
  {
    path:'search/:id',
    component:SearchpatientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
