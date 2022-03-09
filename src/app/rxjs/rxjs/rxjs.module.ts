import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  RxjsRoutingModule
} from './rxjs-routing.module';
import {
  Routes
} from '@angular/router';
import {
  RxjsComponent
} from './rxjs.component';
import {PanelModule} from 'primeng/panel';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {CommuneDetailComponent} from '../commune-detail/commune-detail.component';



@NgModule({
  declarations: [RxjsComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule,
    PanelModule,
    HttpClientModule,
    DropdownModule,
    TableModule
  ]
})
export class RxjsModule {
}
