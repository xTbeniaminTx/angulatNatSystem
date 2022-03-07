import {
  Component,
  OnInit
} from '@angular/core';
import {
  Subject,
  Subscription
} from 'rxjs';
import {
  User
} from '../models/User.model';
import {
  UserService
} from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userSubscription: Subscription;
  users: User[];
  userSubject = new Subject < User[] > ();
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe((users:User[]) => {
      this.users = users
    })
    this.userService.emitUsers();
    // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',this.users);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }



}