import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MaterialModule } from './material.module';
import { BasicChipComponent } from './basic-chip/basic-chip.component';


@NgModule({
  imports:      [ AppRoutingModule,BrowserModule,BrowserAnimationsModule, MaterialModule],
  declarations: [ AppComponent,BasicChipComponent],
  bootstrap:    [ AppComponent ],
  providers:[],
  exports:[BasicChipComponent]
})
export class AppModule { }
