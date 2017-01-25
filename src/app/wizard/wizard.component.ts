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
  xmlstring;



  parser;
  xmlDoc;


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


  // NOTE 2DO in the parseXML, check if something comes out
  // NOTE important HTML5 browser needed
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
    // note the arrow function
    this.myReader.onloadend = (e) => {
      this.xmlstring = this.myReader.result;
      // the xml file => console.log(this.myReader.result);
      console.log('XML Loaded succesfully');

      this.parser = new DOMParser();
      this.xmlDoc = this.parser.parseFromString(this.xmlstring, "text/xml");

      // here we have a dom representation of the xml
      console.log(this.xmlDoc);
      

    };

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


// example class
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo ? : string
  ) {}
}
