import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.scss']
})
export class TestBindingComponent implements OnInit {
  nom:string
  inputType = "date";
  constructor() {
    setTimeout(() => {
      this.inputType = "number";
      this.nom="Angular";
    }, 3000);
  }


  ngOnInit(): void {
  }

  public afficheMomentActuel(): string {
    let auj = new Date();
    return auj.toLocaleDateString('fr-FR') + " " + auj.toLocaleTimeString();
  }



}
