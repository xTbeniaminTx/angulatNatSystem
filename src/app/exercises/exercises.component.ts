import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myDate: Date = new Date();
  lastUpdate: Date = new Date();
    lastUpdateAsync = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(() => {
            resolve(date);
        }, 2000);
    });

}
