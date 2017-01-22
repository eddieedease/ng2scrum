import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;


  constructor() {


  }

  ngOnInit() {}


  clicked() {
    this.submitted = true;
    console.log("form submit clicked");
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}

export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo ? : string
  ) {}
}
