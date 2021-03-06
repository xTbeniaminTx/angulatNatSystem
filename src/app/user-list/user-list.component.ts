import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription
} from 'rxjs';
import {
  User
} from '../models/User.model';
import {
  UserService
} from '../services/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userSubscription: Subscription;
  users: User[];
  users$: Observable<User[]>;
  userSubject = new Subject < User[] > ();
  userService: UserService;
  cols: Partial<{field: string, header: string}>[];

  constructor(userService: UserService,  private _router: Router) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.userSubject.subscribe((users: User[]) => {
      this.users = users;
    });
    this.userService.emitUsers();

    this.users$ = this.userService.getUserList();

    this.cols = [
      {field: 'id', header: 'ID'},
      {field: 'firstName', header: 'Prenom'},
      {field: 'lastName', header: 'Nom'},
      {field: 'email', header: 'Email'},
      {field: 'drinkPreference', header: 'boisson préférée'},
    ];
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  goToDetail(idUser: number): void {

    this._router.navigate([`/update-user/${idUser}`]).then(x => x);
  }



}
