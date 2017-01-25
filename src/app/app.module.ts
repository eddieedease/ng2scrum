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
  CalendarModule
} from 'angular-calendar';
import {
  DragulaModule,
  DragulaService
} from 'ng2-dragula';

// OWN components
import {
  AppComponent
} from './app.component';
import {
  BoardComponent,
  AppDialogResultExampleDialog
} from './board/board.component';
import {
  WizardComponent,
  Hero
} from './wizard/wizard.component';
import {
  CalendarComponent
} from './calendar/calendar.component';


// import hammerjs
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    WizardComponent,
    CalendarComponent,
    AppDialogResultExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CalendarModule.forRoot(),
    DragulaModule
  ],
  entryComponents: [AppDialogResultExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
