import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-component-input-person',
  templateUrl: './angular-component-input-person.component.html',
  styleUrls: ['./angular-component-input-person.component.scss']
})
export class AngularComponentInputPersonComponent implements OnInit {

@Input() name: string;
@Input() age: Number;
@Output() removePerson = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  removeByClick() {
    this.removePerson.emit(this.name);
  }
}
