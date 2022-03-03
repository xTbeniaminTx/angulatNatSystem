import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.scss']
})
export class TestBindingComponent implements OnInit {
  nom:string

  constructor() { 
    this.nom="Angular"
  }

  ngOnInit(): void {
  }



}
