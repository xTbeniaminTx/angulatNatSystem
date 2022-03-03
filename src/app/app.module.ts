import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestBindingComponent } from './test-binding/test-binding.component';

import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestBindingComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    PanelModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
