import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-component-input-progress-bar',
  templateUrl: './angular-component-input-progress-bar.component.html',
  styleUrls: ['./angular-component-input-progress-bar.component.scss']
})
export class AngularComponentInputProgressBarComponent implements OnInit {

  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  constructor() { }

  ngOnInit() {
  }

}
