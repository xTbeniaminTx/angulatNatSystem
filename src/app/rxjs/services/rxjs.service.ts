import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommuneModel } from '../model/commune';
import { DepartementModel } from '../model/departement.model';
import { RegionModel } from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

baseUrl = 'https://geo.api.gouv.fr';

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient
  ) { }

getAllRegions(): Observable<RegionModel[]> {
  return this._http.get<RegionModel[]>(`${this.baseUrl}/regions`);
}

getAllDeptByRegion(codeRegion: string): Observable<DepartementModel[]> {
  return this._http.get<DepartementModel[]>(
    `${this.baseUrl}/regions/${codeRegion}/departements`);
}

getAllCommuneByDept(code: string): Observable<CommuneModel[]> {
  return this._http.get<CommuneModel[]>(
    `${this.baseUrl}/departements/${code}/communes`);
}




}
