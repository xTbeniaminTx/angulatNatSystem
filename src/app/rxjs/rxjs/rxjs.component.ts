import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import {Observable} from 'rxjs';
import {RegionModel} from '../model/region.model';
import {DepartementModel} from '../model/departement.model';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  regionList$: Observable<RegionModel[]> = this._rxjsService.getAllRegions();
  departementList$: Observable<DepartementModel[]>;

  constructor(
    // tslint:disable-next-line:variable-name
    private _rxjsService: RxjsService
  ) { }

  ngOnInit(): void {
  }

  changeDeptList(event: {originalEvent: PointerEvent, value: RegionModel}): void {
    this.departementList$ = this._rxjsService.getAllDeptByRegion(event?.value?.code);
  }

  changeCommList(event: {originalEvent: PointerEvent, value: DepartementModel}): void {
   // this.departementList$ = this._rxjsService.getAllDeptByRegion(event?.value?.code);
  }

}
