import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptypeRoutingModule } from './emptype-routing.module';
import { ListemptypeComponent } from './listemptype/listemptype.component';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'ng-angular8-datatable';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ListemptypeComponent, SearchComponent],
  imports: [
    CommonModule,
    EmptypeRoutingModule,
    DataTableModule,
    PageHeaderModule,
    NgbModule,
    FormsModule
  ]
})
export class EmptypeModule { }
