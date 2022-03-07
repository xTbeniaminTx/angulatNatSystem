import {
  Injectable
} from '@angular/core';
import {
  Subject,
  Subscription
} from 'rxjs';
import {
  User
} from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  users: User[] = [
    new User('Bob', 'Alex', 'will@will.com', 'café latte', ['coder', 'boire du cafe'])
  ];
  userSubject = new Subject < User[] > ();
 
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user)
    this.emitUsers();
  }





}
