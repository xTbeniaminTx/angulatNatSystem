import {
  Injectable
} from '@angular/core';
import {
  Subject
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
    new User('Bob', 'bobina', 'bobina@will.com', 'café latte', ['coder', 'boire du cafe latte']),
    new User('Bob', 'L\'Eponge', 'bob@will.com', 'café latte', ['decoder', 'boire du cafe latte'])
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
