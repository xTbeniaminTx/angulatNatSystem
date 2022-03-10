import {Component} from '@angular/core';
import {RxjsService} from './rxjs/services/rxjs.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  loading$: Observable<boolean> = this._rxjsService.getSpinnerSubjects$();

  constructor(
    // tslint:disable-next-line:variable-name
    private _rxjsService: RxjsService
  ) {}


}
