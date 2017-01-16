import {
  Component,
  OnInit
} from '@angular/core';
import {
  DragulaService
} from 'ng2-dragula/ng2-dragula';

import {
  MdDialog,
  MdDialogRef
} from '@angular/material';

// needed for jquery loading
declare var $: any;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  selectedOption: string;



  constructor(private dragulaService: DragulaService, public dialog: MdDialog) {
    // first have injected dragula & listen to their service
    dragulaService.setOptions('first-bag', {
      removeOnSpill: false
    });


    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }

  private onDrop(args) {
    let [e, el] = args;
    // do something
  }

  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }



  onLinkClick(event) {
    console.log('clicked');
    // open the modal
  }

  ngOnInit() {
    $(document).ready(function ($) {
      console.log('jquery says loaded');
      // Initialize collapse button
      $('.button-collapse').sideNav();
      // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    });
  }

}



@Component({
  selector: 'dialog-result-example-dialog',
  template: '<div><h5>TODO: Modal form</h5><br><br><br><p>Jup</p></div>',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef < DialogResultExampleDialog > ) {}
}
