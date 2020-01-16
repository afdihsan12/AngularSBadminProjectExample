import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedrecRoutingModule } from './medrec-routing.module';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchmedrecComponent } from './searchmedrec/searchmedrec.component';

@NgModule({
  declarations: [ListComponent, SearchmedrecComponent],
  imports: [
    CommonModule,
    MedrecRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule
  ]
})
export class MedrecModule { }
