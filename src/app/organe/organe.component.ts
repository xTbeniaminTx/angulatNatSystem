import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-organe',
  templateUrl: './organe.component.html',
  styleUrls: ['./organe.component.scss']
})
export class OrganeComponent implements OnInit {
 @Input() organe: string;
 @Output() public deleteOrg: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteOrgane() {
    this.deleteOrg.emit(this.organe);
  }

}
