import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-component-input-list-person',
  templateUrl: './angular-component-input-list-person.component.html',
  styleUrls: ['./angular-component-input-list-person.component.scss']
})
export class AngularComponentInputListPersonComponent implements OnInit {

  arrPerson = [
    {name: 'Storm', age: 300},
    {name: 'Earth', age: 350},
    {name: 'Ember', age: 400},
  ];
  constructor() { }

  ngOnInit() {
  }
removeByName(name: string) {
  const index = this.arrPerson.findIndex(e => e.name === name);
  this.arrPerson.splice(index, 1);
}
}
