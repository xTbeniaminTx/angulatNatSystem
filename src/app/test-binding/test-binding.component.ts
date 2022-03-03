import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  templateUrl: './test-binding.component.html',
  styleUrls: ['./test-binding.component.scss']
})
export class TestBindingComponent implements OnInit {
  nom:string;
  inputType = "date";
  compteur: number;
  content = "";
  sexe = "F";
  color = "red";
  monNom="";
  
  constructor() {
    this.compteur = 0;
    setTimeout(() => {
      this.inputType = "number";
      this.nom="Angular";
    }, 10000);
  }


  ngOnInit(): void {
  }

  public afficheMomentActuel(): string {
    let auj = new Date();
    return auj.toLocaleDateString('fr-FR') + " " + auj.toLocaleTimeString();
  }

  public incrementeCompteur() {
    this.compteur++;
  }



}
