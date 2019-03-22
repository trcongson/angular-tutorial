import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-angular-component-input-name-card',
  templateUrl: './angular-component-input-name-card.component.html',
  styleUrls: ['./angular-component-input-name-card.component.scss']
})
export class AngularComponentInputNameCardComponent implements OnInit {
nameAvatar = "https://res.cloudinary.com/teepublic/image/private/s--imtLQwII--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1537945289/production/designs/3214340_0.jpg";
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  
  constructor() { }

  ngOnInit() {
  }

}
