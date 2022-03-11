import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User.model';
import {UserService} from '../services/user.service';
import {Observable, of, Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CommuneModel} from '../rxjs/model/commune';
import {catchError, concatMap, delay, filter, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  id: string;
  userUpdateForm: FormGroup;
  drinks: string[];
  hobbies: FormArray[];
  selectedUser: Observable<User>;
  selectedUserObj: User;

  constructor(
    private userService: UserService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
    this.sub.add(
      this._activatedRoute.paramMap.pipe(
        delay(2000),
        filter((param: ParamMap) => !!param),
        concatMap((param: ParamMap) => {

            return this.userService.getUserById(
              param.get('id')).pipe(
              map((user: User) => {
                return {userObj: user, paramObj: param};
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


          next: ({userObj, paramObj}) => {
            this.id = paramObj.get('id');
            this.selectedUser = this.userService.getUserById(paramObj.get('id'));
            this.selectedUser.subscribe(
              user => {
                this.selectedUserObj = user;
              });
          }
        }
      )
    );

  }

  initForm() {
    this.userUpdateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('',),
      drinkPreference: new FormControl(''),
      hobbies: new FormArray([])
    });
  }

  onSubmitForm() {
    const formValue = this.userUpdateForm.value;
    const userToUpdate = this.userService.getUserById(this.id);
    // const updateUser = new User(
    //   formValue['firstName'],
    //   formValue['lastName'],
    //   formValue['email'],
    //   formValue['drinkPreference'],
    //   formValue['hobbies'] ? formValue['hobbies'] : []
    // );

    // this.userService.updateUser(userToUpdate).subscribe(x => console.log(x));
    console.log(userToUpdate);

    this.userService.updateUser(this.id).subscribe(x => console.log(x));

  }


  // onAddHobby(hobby: string) {
  //   this.getHobbies().push(new FormControl(hobby));
  // }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
