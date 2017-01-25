import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  CalendarEvent
} from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate: Date;



  constructor() {



  }

  ngOnInit() {



  }

  eventClicked({
    event
  }: {
    event: CalendarEvent
  }): void {
    console.log('Event clicked', event);
  }


}
