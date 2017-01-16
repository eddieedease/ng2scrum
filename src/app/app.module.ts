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
  DialogResultExampleDialog
} from './board/board.component';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    DragulaModule
  ],
  entryComponents: [DialogResultExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
