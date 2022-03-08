import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  RxjsRoutingModule
} from '../../rxjs-routing.module';
import {
  Routes
} from '@angular/router';
import {
  RxjsComponent
} from './rxjs.component';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';

const routes: Routes = [{
  path: '',
  component: RxjsComponent
}];


@NgModule({
  declarations: [RxjsComponent],
    imports: [
        CommonModule,
        RxjsRoutingModule,
        PanelModule,
        HttpClientModule,
        DropdownModule
    ]
})
export class RxjsModule {}
