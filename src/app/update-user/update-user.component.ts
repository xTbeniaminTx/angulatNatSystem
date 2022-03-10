import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CommuneModel} from '../rxjs/model/commune';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  id: number;
  userUpdateForm: FormGroup;
  drinks: string[];
  hobbies: FormArray[];
  selectedUser: User;

  constructor(
    private userService: UserService,
  private _activatedRoute: ActivatedRoute,
  ) { }



  ngOnInit(): void {

  }

  initForm() {
    this.userUpdateForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      drinkPreference: new FormControl(this.drinks),
      hobbies: new FormArray([])
    })
  }

  onSubmitForm(id: number) {
    const formValue = this.userUpdateForm.value;
    const userToUpdate = this.userService.getUserById(id);
    // const updateUser = new User(
    //   formValue['firstName'],
    //   formValue['lastName'],
    //   formValue['email'],
    //   formValue['drinkPreference'],
    //   formValue['hobbies'] ? formValue['hobbies'] : []
    // );

    // this.userService.updateUser(userToUpdate).subscribe(x => console.log(x));
    console.log(userToUpdate);

  }


  getHobbies(): FormArray {
    return this.userUpdateForm.get('hobbies') as FormArray;
  }

  onAddHobby(hobby: string) {
    this.getHobbies().push(new FormControl(hobby));
  }




  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
