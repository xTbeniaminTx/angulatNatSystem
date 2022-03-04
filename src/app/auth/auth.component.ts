import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  signIn() {
    this.authService.signIn();
    console.log("OK")
  }

  signOut() {
    this.authService.signOut();
    console.log("OOUT")
  }

}
