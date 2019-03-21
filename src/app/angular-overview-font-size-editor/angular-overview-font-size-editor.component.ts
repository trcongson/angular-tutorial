import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-overview-font-size-editor',
  templateUrl: './angular-overview-font-size-editor.component.html',
  styleUrls: ['./angular-overview-font-size-editor.component.scss']
})
export class AngularOverviewFontSizeEditorComponent implements OnInit {

  fontSize = 14;
  constructor() { }

  onChange(value){
    this.fontSize = value;
  }

  ngOnInit() {
  }

}
