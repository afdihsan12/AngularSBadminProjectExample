import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinersRoutingModule } from './mediciners-routing.module';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MedicinersRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule
  ]
})
export class MedicinersModule { }
