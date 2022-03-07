import {
  Injectable
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  User
} from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  userSubject: Subject<string>;

  constructor() {}

  addUser(user: User) {
    this.users.push(user)
  }

  users2 = new User('Bob', 'Alex', 'will@will.com', 'café latte', ['coder', 'boire du cafe'])


}
