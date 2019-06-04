import {Component, OnInit} from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'moon';
  petImage = 'https://pbs.twimg.com/profile_images/799072661670416384/IhTiEogQ_400x400.jpg';

  constructor() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
