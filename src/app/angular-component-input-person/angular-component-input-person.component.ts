import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-component-input-person',
  templateUrl: './angular-component-input-person.component.html',
  styleUrls: ['./angular-component-input-person.component.scss']
})
export class AngularComponentInputPersonComponent implements OnInit {

@Input() name: String;
@Input() age: Number;
  constructor() { }

  ngOnInit() {
  }

}
