import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { from } from 'rxjs';
import {
  User
} from '../models/User.model';
import { UserService } from '../services/user.service';
  
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  drinks: string[] = ['late', 'coke', 'lait'];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      drinkPreference: new FormControl(this.drinks)
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
    console.log(newUser);

  }

}
