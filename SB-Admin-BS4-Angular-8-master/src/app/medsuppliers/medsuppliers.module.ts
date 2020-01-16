import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedsuppliersRoutingModule } from './medsuppliers-routing.module';
import { ListComponent } from './list/list.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ListComponent, SearchComponent],
  imports: [
    CommonModule,
    MedsuppliersRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule
  ]
})
export class MedsuppliersModule { }
