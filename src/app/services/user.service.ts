import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable,
  Subject
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';
import {
  User
} from '../models/User.model';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrlUser = environment.user;

  constructor(private http: HttpClient) {
  }

  users: User[] = [
    new User('1', 'Bob', 'bobina', 'bobina@will.com', 'café latte', ['coder', 'boire du cafe latte']),
    new User('2', 'Bob', 'L\'Eponge', 'bob@will.com', 'café latte', ['decoder', 'boire du cafe latte'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  getUserList(): Observable<User[]> {
    return this.http.get(this.baseUrlUser + '') as Observable<User[]>;
  }

  createUser(user: User): Observable<User> {
    return this.http.post(this.baseUrlUser, user) as Observable<User>;
  }

  // méthode effectuant une requête HTTP permettant de récupérer un user
  // @ts-ignore
  getUserById(id: string): Observable<User> {
    return this.http.get(this.baseUrlUser ) as Observable<User>;
  }

  // méthode effectuant une requête HTTP permettant de mettre à jour un user
  // @ts-ignore
  updateUser(id): Observable<User>  {
    // @ts-ignore
    return this.http.patch(this.baseUrlUser + '/' + id) as unknown as Observable<User>;
  }


}
