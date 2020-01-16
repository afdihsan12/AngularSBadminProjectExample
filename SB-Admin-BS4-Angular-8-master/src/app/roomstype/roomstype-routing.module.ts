import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SearchroomstypeComponent } from './searchroomstype/searchroomstype.component';

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'search/:code',
    component:SearchroomstypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomstypeRoutingModule { }
