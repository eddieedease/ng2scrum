import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  HttpModule
} from '@angular/http';
import {
  MaterialModule
} from '@angular/material';

import {
  DragulaModule,
  DragulaService
} from 'ng2-dragula';

import {
  AppComponent
} from './app.component';
import {
  BoardComponent,
  AppDialogResultExampleDialog
} from './board/board.component';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AppDialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DragulaModule
  ],
  entryComponents: [AppDialogResultExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
