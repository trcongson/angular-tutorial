import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-overview-view-pet',
  templateUrl: './angular-overview-view-pet.component.html',
  styleUrls: ['./angular-overview-view-pet.component.scss']
})
export class AngularOverviewViewPetComponent {
  petName = 'dich le nhiet ba';
  petImage = 'https://media1.nguoiduatin.vn/media/h-th-van/2018/03/20/dinh-liet-nhiet-ba.jpg'
  constructor() { }

  updateName(name: string) {
    this.petName = name;
  }

  updateImage(image: string) {
    this.petImage = image;
  }

}
