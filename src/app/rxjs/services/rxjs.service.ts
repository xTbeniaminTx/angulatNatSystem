import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CommuneModel} from '../model/commune';
import {DepartementModel} from '../model/departement.model';
import {RegionModel} from '../model/region.model';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(
    // tslint:disable-next-line:variable-name
    private _http: HttpClient
  ) {
  }

  // tslint:disable-next-line:variable-name
  private _mySubject$: BehaviorSubject<string> = new BehaviorSubject<string>('Hello');

  // tslint:disable-next-line:variable-name
  private _spinnerSubjects$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);


  // tslint:disable-next-line:variable-name
  private _baseUrl = 'https://geo.api.gouv.fr';

  getSpinnerSubjects$(): Observable<boolean> {
    return this._spinnerSubjects$.asObservable();
  }

  setSpinnerSubjects$(value: boolean): void {
    this._spinnerSubjects$.next(value);
  }

  getMySubject$(): Observable<string> {
    return this._mySubject$.asObservable();
  }

  // tslint:disable-next-line:typedef
  setMySubject$(value: string) {
    this._mySubject$.next(value);
  }

  getAllRegions(): Observable<RegionModel[]> {
    return this._http.get<RegionModel[]>(`${this._baseUrl}/regions`);
  }

  getAllDeptByRegion(codeRegion: string): Observable<DepartementModel[]> {
    return this._http.get<DepartementModel[]>(
      `${this._baseUrl}/regions/${codeRegion}/departements`);
  }

  getAllCommuneByDept(code: string): Observable<CommuneModel[]> {
    return this._http.get<CommuneModel[]>(
      `${this._baseUrl}/departements/${code}/communes`);
  }


}
