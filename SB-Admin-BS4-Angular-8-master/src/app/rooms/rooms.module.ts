import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchroomsComponent } from './searchrooms/searchrooms.component';
@NgModule({
  declarations: [ListComponent, SearchroomsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    PageHeaderModule,
    NgbModule,
    DataTableModule,
    FormsModule
  ]
})
export class RoomsModule { }
