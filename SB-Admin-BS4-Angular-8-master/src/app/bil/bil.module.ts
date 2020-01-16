import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BilRoutingModule } from './bil-routing.module';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PageHeaderModule } from '../shared';
import { DataTableModule } from 'ng-angular8-datatable';

@NgModule({
  declarations: [HeaderComponent, DetailComponent],
  imports: [
    CommonModule,
    BilRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        NgbModule,
        PageHeaderModule,
        DataTableModule
  ]
})
export class BilModule { }
