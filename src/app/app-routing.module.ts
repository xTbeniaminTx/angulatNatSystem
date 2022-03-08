import {
  NgModule
} from "@angular/core";
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { ErrorComponent } from "./error/error.component";
import { ExamplesComponent } from "./examples/examples.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { RxjsModule } from "./rxjs/rxjs/rxjs.module";
import { AuthGuardService } from "./services/auth-guard.service";
import { UserListComponent } from "./user-list/user-list.component";



const routes: Routes = [{
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
    path: 'rxjs',
    loadChildren: (): Promise < string | typeof RxjsModule > => import('./rxjs/rxjs/rxjs.module').then(module => module.RxjsModule)
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
  },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
