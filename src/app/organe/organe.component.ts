import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-organe',
  templateUrl: './organe.component.html',
  styleUrls: ['./organe.component.scss']
})
export class OrganeComponent implements OnInit {
 @Input() organe: string;

  constructor() { }

  ngOnInit(): void {
  }

}
