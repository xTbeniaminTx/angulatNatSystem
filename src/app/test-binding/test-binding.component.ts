import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {
  BehaviorSubject,
  from,
  interval,
  Observable,
  Observer,
  Subject,
  Subscription
} from 'rxjs';
import {
  map,
  filter
} from 'rxjs/operators';


interface User {
  name: string,
    age: number,
    email: string
}

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.scss']
})
export class TestBindingComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
  nom: string;
  inputType = "date";
  compteur: number;
  content = "";
  sexe = "F";
  color = "red";
  monNom = "";
  articles: any[] = [{
    "reference": "pomme",
    "prix": 1.5
  }, {
    "reference": "poire",
    "prix": 1.2
  }, {
    "reference": "bannanas",
    "prix": 1.9
  }];
  organe: string;
  organes: string[] = [];

  obs$: Observable < any > ;
  counter$: Observable < any > ;
  sub: Subscription;
  subCounter: Subscription;

  sub2: Subscription;

  counter: number;

  subj = new Subject < number > ();
  subj2 = new BehaviorSubject < number > (0);

  subjectPipe = new BehaviorSubject < User > ({
    name: 'jean',
    age: 28,
    email: 'jean@gmail.com'
  });

  sub1 = this.subjectPipe.subscribe((x: User) => {
    console.log('[sub1] : ', x);
  })



  myDate: Date = new Date();
  lastUpdateAsync = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });
  name: Promise < string > ;

  constructor() {
    this.compteur = 0;
    setTimeout(() => {
      this.inputType = "number";
      this.nom = "Angular";
    }, 10000);
  }

  ngOnInit(): void {

    this.myForm = new FormGroup({
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    console.log("myForm:", this.myForm)


    const sub2 = this.subjectPipe.pipe(
      map((user: User) => {
        return user.email;
      })
    ).subscribe((email: string) => {
      console.log('exemple utilisation de map : ', email);
    })

    const sub3 = this.subjectPipe.pipe(
      filter((user: User) => {
        return true; //essayer avec return false  
      }),
      map((user: User) => {
        return user.email;
      })
    ).subscribe((email: string) => {
      console.log('exemple utilisation de filter : ', email);
    })

    const Array$ = from([1, 2, 3, 4, 5]);
    const resultFilter = Array$.pipe(
      filter(x => x < 4)
    );
    console.log("filter",resultFilter); // donne [1, 2, 3]




    this.name = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Paul');
      }, 3000)
    })


    this.obs$ = new Observable((observer: Observer < any > ) => {
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(45);
      }, 2000)
      //   observer.error('Message d erreur');
      observer.next(4);
      observer.complete();
    });

    this.sub = this.obs$.subscribe({
      next: x => console.log('[next] :', x),
      complete: () => console.log('[complete]'),
      error: x => console.log('[error] :', x)
    });

    this.sub2 = this.obs$.subscribe(
      x => console.log('[sub2 next] :', x),
      x => console.log('[sub2 error] :', x)
    );

    const s1 = this.subj.subscribe((x: number) => {
      console.log('[s1]:', x);
    })

    const s2 = this.subj.subscribe((x: number) => {
      console.log('[s2]:', x);
    })

    this.subj.next(2);


    const s3 = this.subj2.subscribe((x: number) => {
      console.log('[s3] : ', x);
    })

    const s4 = this.subj2.subscribe((x: number) => {
      console.log('[s4] : ', x);
    })

    this.subj2.next(2021);

    this.counter$ = interval(1000);
    this.subCounter = this.counter$.subscribe({
      next: x => this.counter = x,
      complete: () => console.log('[complete]'),
      error: x => console.log('[error] :', x)
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.subCounter.unsubscribe();

  }

  public afficheMomentActuel(): string {
    let auj = new Date();
    return auj.toLocaleDateString('fr-FR') + " " + auj.toLocaleTimeString();
  }

  public incrementeCompteur() {
    this.compteur++;
  }

  deleteOrgane(organe) {
    this.organes.splice(this.organe.indexOf(organe), 1);
  }

}
