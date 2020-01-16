import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabsRoutingModule } from './labs-routing.module';
import { ListlabsComponent } from './listlabs/listlabs.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchlabsComponent } from './searchlabs/searchlabs.component';
@NgModule({
  declarations: [ListlabsComponent, SearchlabsComponent],
  imports: [
    CommonModule,
    LabsRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule
  ]
})
export class LabsModule { }
