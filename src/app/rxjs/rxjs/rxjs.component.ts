import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import {Observable} from 'rxjs';
import {RegionModel} from '../model/region.model';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  regionList$: Observable<RegionModel[]> = this._rxjsService.getAllRegions();

  constructor(
    // tslint:disable-next-line:variable-name
    private _rxjsService: RxjsService
  ) { }

  ngOnInit(): void {
  }

  changeDeptList(event: RegionModel): void {}

}
