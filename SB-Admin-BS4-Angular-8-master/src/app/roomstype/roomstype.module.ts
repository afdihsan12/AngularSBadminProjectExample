import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomstypeRoutingModule } from './roomstype-routing.module';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchroomstypeComponent } from './searchroomstype/searchroomstype.component';

@NgModule({
  declarations: [ListComponent, SearchroomstypeComponent],
  imports: [
    CommonModule,
    RoomstypeRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule,
    DataTableModule
  ]
})
export class RoomstypeModule { }
