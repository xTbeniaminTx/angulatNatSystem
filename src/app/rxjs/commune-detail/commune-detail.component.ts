import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {delay, filter} from 'rxjs/operators';
import {RxjsService} from '../services/rxjs.service';
import {CommuneModel} from '../model/commune';

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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub.add(
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
    );
  }
}
