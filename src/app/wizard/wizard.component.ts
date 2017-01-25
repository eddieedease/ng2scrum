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


  // trying to load some XML
  file: File;
  myReader: FileReader ;
   



  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;


  constructor() {


  }

  ngOnInit() {}


  // NOTE 2DO in the parseXML, check if something comes out
  // NOTE important HTML5 browser needed
  handleXMLChange ($event) {
    console.log('Attempting to load XML');
    this.parseXML($event.target);
  }

   parseXML(inputValue: any) : void {
    this.file = inputValue.files[0]; 
    this.myReader = new FileReader();

    this.myReader.onloadend = function(e){
      // you can perform an action with readed data here
      // TODO so this one get stored in "result"
      console.log(e.target);
    }

    this.myReader.readAsText(this.file);
  }




  clicked() {
    this.submitted = true;
    console.log('form submit clicked');
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
