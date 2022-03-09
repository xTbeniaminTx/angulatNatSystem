import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsComponent} from './rxjs.component';
import {CommuneDetailComponent} from '../commune-detail/commune-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  },
  {
    path: ':code',
    component: CommuneDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {

}
