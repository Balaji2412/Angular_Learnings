import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { MouseEventsDirective } from './custom_directives/mouse-events.directive';
import { PipeSComponent } from './pipe-s/pipe-s.component';
import { FormsComponent } from './forms/forms.component';
import { ClistComponent } from './clist/clist.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    MouseEventsDirective,
    PipeSComponent,
    FormsComponent,
    ClistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
