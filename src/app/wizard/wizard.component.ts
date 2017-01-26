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

  self = this;
  // trying to load some XML
  file: File;
  myReader: FileReader;

  parser;
  xmlstring;
  xmlDoc;
  jsonDoc;

  obj: Object;

  powers = ['oioi', 'Super Flexible',
    'Super Hot', 'Weather Changer'
  ];
  model = new Hero(29, 'Who', this.powers[0], 'Goudvis Poes');
  submitted = false;


  constructor() {


  }
  // init function
  ngOnInit() {
    this.self = this;
    this.xmlstring = 'sdfs';
  }


  // Handling the XML File --> 
  handleXMLChange($event) {
    console.log('Attempting to load XML');
    this.parseXML($event.target);
  }

  parseXML(inputValue: any): void {
    this.file = inputValue.files[0];
    this.myReader = new FileReader();
    // this starts the loading
    this.myReader.readAsText(this.file);
    // when loaded call
    // note the arrow function for non window scope, So can acces comp scope
    this.myReader.onloadend = (e) => {
      this.xmlstring = this.myReader.result;
      // the xml file => console.log(this.myReader.result);
      console.log(this.xmlstring);
      let x2js = new X2JS();
      this.jsonDoc = x2js.xml_str2json(this.xmlstring);
      // console log result
      console.log(this.jsonDoc);
    };
  };


  clicked() {
    this.submitted = true;
    console.log('form submit clicked');
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

}


// example class
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo ? : string
  ) {}
}
