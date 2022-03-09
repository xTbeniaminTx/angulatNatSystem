import {Component, OnInit} from '@angular/core';
import {RxjsService} from '../services/rxjs.service';
import {Observable} from 'rxjs';
import {RegionModel} from '../model/region.model';
import {DepartementModel} from '../model/departement.model';
import {CommuneModel} from '../model/commune';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  regionList$: Observable<RegionModel[]> = this._rxjsService.getAllRegions();
  departmentList$: Observable<DepartementModel[]>;
  communeList$: Observable<CommuneModel[]>;
  cols: Partial<{ field: string, header: string }>[] = [
    {field: 'code', header: 'Code'},
    {field: 'codeDepartement', header: 'Code departement'},
    {field: 'codesPostaux', header: 'Code postaux'},
    {field: 'nom', header: 'Nom'},
    {field: 'population', header: 'Population'},
  ];

  constructor(
    // tslint:disable-next-line:variable-name
    private _rxjsService: RxjsService
  ) {
  }

  ngOnInit(): void {
  }

  changeDeptList(event: { originalEvent: PointerEvent, value: RegionModel }): void {
    this.departmentList$ = this._rxjsService.getAllDeptByRegion(event?.value?.code);
  }

  changeCommList(event: { originalEvent: PointerEvent, value: DepartementModel }): void {
    this.communeList$ = this._rxjsService.getAllCommuneByDept(event?.value?.code
    ).pipe(
      map((communes: CommuneModel[]) =>
        communes.map((commune: CommuneModel) => {
            return {...commune, codesPostaux : [ commune.codesPostaux.join(' - ')]};
          }
        )
      )
    )
    ;
  }

}
