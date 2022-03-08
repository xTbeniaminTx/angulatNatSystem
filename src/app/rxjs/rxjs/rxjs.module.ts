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

const routes: Routes = [{
  path: '',
  component: RxjsComponent
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule {}
