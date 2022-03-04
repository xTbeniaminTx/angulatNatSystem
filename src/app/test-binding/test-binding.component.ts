import {Component, OnInit} from '@angular/core';

@Component(
    {selector: 'app-test-binding', templateUrl: './test-binding.component.html', styleUrls: ['./test-binding.component.scss']}
)
export class TestBindingComponent implements OnInit {
    nom: string;
    inputType = "date";
    compteur: number;
    content = "";
    sexe = "F";
    color = "red";
    monNom = "";
    articles: any[] = [
        {
            "reference": "pomme",
            "prix": 1.5
        }, {
            "reference": "poire",
            "prix": 1.2
        }, {
            "reference": "bannanas",
            "prix": 1.9
        }
    ];
    organe:string;
    organes:string[]=[];
   
    myDate: Date = new Date();
    lastUpdateAsync = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(() => {
            resolve(date);
        }, 2000);
    });
    name: Promise<string>;

    constructor() {
        this.compteur = 0;
        setTimeout(() => {
            this.inputType = "number";
            this.nom = "Angular";
        }, 10000);
    }

    ngOnInit(): void {
        this.name = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Paul');
            }, 3000)
        })
    }

    public afficheMomentActuel(): string {
        let auj = new Date();
        return auj.toLocaleDateString('fr-FR') + " " + auj.toLocaleTimeString();
    }

    public incrementeCompteur() {
        this.compteur++;
    }

}
