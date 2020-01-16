import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpRoutingModule } from './emp-routing.module';
import { ListempComponent } from './listemp/listemp.component';
import { FormemployeeComponent } from './formemployee/formemployee.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ListempComponent, FormemployeeComponent, SearchComponent],
  imports: [
    CommonModule,
    EmpRoutingModule,
    PageHeaderModule,
    NgbModule,
    DataTableModule,
    FormsModule
  ]
})
export class EmpModule { }
