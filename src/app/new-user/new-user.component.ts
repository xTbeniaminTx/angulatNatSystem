import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

 userForm: FormGroup;
 drinks: string[] = ['late', 'coke', 'lait'];

  constructor() {
    
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      drinkPreference: new FormControl(this.drinks)
    })
  }

}
