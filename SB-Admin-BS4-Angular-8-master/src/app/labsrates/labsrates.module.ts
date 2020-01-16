import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabsratesRoutingModule } from './labsrates-routing.module';
import { ListlabsratesComponent } from './listlabsrates/listlabsrates.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchlabsratesComponent } from './searchlabsrates/searchlabsrates.component';

@NgModule({
  declarations: [ListlabsratesComponent, SearchlabsratesComponent],
  imports: [
    CommonModule,
    LabsratesRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule

  ]
})
export class LabsratesModule { }
