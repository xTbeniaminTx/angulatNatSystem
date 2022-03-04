import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestBindingComponent } from './test-binding/test-binding.component';

import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HighlightDirective } from './directives/highlight.directive';
import { TimerDirective } from './directives/timer.directive';
import { CbPipe } from './pipes/cb.pipe';
import { OrganeComponent } from './organe/organe.component';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './services/panier.service';



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
    PanierComponent
   
  ],
  imports: [
    BrowserModule,
    PanelModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
