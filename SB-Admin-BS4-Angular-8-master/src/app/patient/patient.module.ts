import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { ListpatientComponent } from './listpatient/listpatient.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchpatientComponent } from './searchpatient/searchpatient.component';


@NgModule({
  declarations: [ListpatientComponent, SearchpatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    PageHeaderModule,
    NgbModule,
    DataTableModule,
    FormsModule
  ]
})
export class PatientModule { }
