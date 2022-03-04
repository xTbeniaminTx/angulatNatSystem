import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: string[] = [];

  constructor() { }
}
