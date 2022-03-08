import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  FormsModule
} from '@angular/forms';

import {
  AppComponent
} from './app.component';
import {
  NavbarComponent
} from './navbar/navbar.component';
import {
  TestBindingComponent
} from './test-binding/test-binding.component';

import {
  PanelModule
} from 'primeng/panel';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  HighlightDirective
} from './directives/highlight.directive';
import {
  TimerDirective
} from './directives/timer.directive';
import {
  CbPipe
} from './pipes/cb.pipe';
import {
  OrganeComponent
} from './organe/organe.component';
import {
  AddComponent
} from './add/add.component';
import {
  PanierComponent
} from './panier/panier.component';
import {
  PanierService
} from './services/panier.service';
import {
  AuthComponent
} from './auth/auth.component';
import {
  ExamplesComponent
} from './examples/examples.component';
import {
  ExercisesComponent
} from './exercises/exercises.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  ErrorComponent
} from './error/error.component';
import {
  AuthGuardService
} from './services/auth-guard.service';
import {
  ReactiveFormsModule
} from '@angular/forms'
import {
  UserService
} from './services/user.service';
import {
  UserListComponent
} from './user-list/user-list.component';
import {
  NewUserComponent
} from './new-user/new-user.component';
import {
  InputTextModule
} from 'primeng/inputtext';
import {
  DropdownModule
} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {HttpClient, HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [{
    path: 'examples',
    component: ExamplesComponent
  },
  {
    path: 'exercises',
    canActivate: [AuthGuardService],
    component: ExercisesComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'new-user',
    component: NewUserComponent
  },
  {
    path: '',
    component: ExamplesComponent
  },
  {
    path: 'not-found',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestBindingComponent,
    HighlightDirective,
    TimerDirective,
    CbPipe,
    OrganeComponent,
    AddComponent,
    PanierComponent,
    AuthComponent,
    ExamplesComponent,
    ExercisesComponent,
    ErrorComponent,
    UserListComponent,
    NewUserComponent

  ],
  imports: [
    BrowserModule,
    PanelModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    HttpClientModule

  ],
  providers: [
    PanierService,
    UserService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
