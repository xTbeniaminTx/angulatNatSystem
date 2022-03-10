import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  drinks: string[] = ['late', 'coke', 'lait'];
  hobbies: FormArray[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      drinkPreference: new FormControl(this.drinks),
      hobbies: new FormArray([])
    })
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies'] : []
    );

    this.userService.addUser(newUser);
    this.userService.createUser(newUser).subscribe(x => console.log(x));
    console.log(newUser);

  }


  getHobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const newHobbyControl = new FormControl(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
