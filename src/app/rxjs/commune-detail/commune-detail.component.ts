import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {of, Subscription, timer} from 'rxjs';
import {catchError, concatMap, delay, filter, map, tap} from 'rxjs/operators';
import {RxjsService} from '../services/rxjs.service';
import {CommuneModel} from '../model/commune';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-commune-detail',
  templateUrl: './commune-detail.component.html',
  styleUrls: ['./commune-detail.component.scss']
})
export class CommuneDetailComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  selectedCommune: CommuneModel;


  constructor(
    // tslint:disable-next-line:variable-name
    private _activatedRoute: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _rxjsService: RxjsService
  ) {
  }

  ngOnInit(): void {

    this._rxjsService.setMySubject$('Vincent');
    // this._rxjsService.setSpinnerSubjects$(true);
    // delay(2000);
    // this._rxjsService.setSpinnerSubjects$(false);
    this._rxjsService.getMySubject$().subscribe({
      next: (val) => console.log('subject', val)
    });

    console.log('xxxxxxxxxxxxxxxxxxxxx', this._rxjsService.getMySubject$());


    this.sub.add(
      /* //ANTI PATTERN
      this._activatedRoute.paramMap.pipe(
        delay(2000),
        filter((param: ParamMap) => ![null, undefined].includes(param))
      ).subscribe((param: ParamMap) => {
          console.log(param);
          const codeCommune = param.get('code');
          const codeDepartement = param.get('code').substr(0, 2);

          this._rxjsService.getAllCommuneByDept(codeDepartement).subscribe(
            {
              next: (communes: CommuneModel[]) => {
                this.selectedCommune =
                  communes.find((comm: CommuneModel) => comm.code === codeCommune);
              }
            }
          );
        }
      )
      */
      this._activatedRoute.paramMap.pipe(
        delay(2000),
        filter((param: ParamMap) => !!param),
        concatMap((param: ParamMap) => {

            return this._rxjsService.getAllCommuneByDept(
              param.get('code').substr(0, 2)).pipe(
              map((communes: CommuneModel[]) => {
                return {communesObj: communes, paramObj: param};
              })
            );
          }
        ),
        catchError((err: HttpErrorResponse) => {
            console.error(err.message);
            throw of(err);
          }
        ),
      ).subscribe({


          next: ({communesObj, paramObj}) => {

            this.selectedCommune = communesObj.find((comm: CommuneModel) =>
              comm.code === paramObj.get('code')
            );
          }
        }
      )
    );
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
