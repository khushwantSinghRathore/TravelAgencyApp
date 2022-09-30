import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = [
    {
      name: 'All',
    },
    {
      name: 'Popular',
    },
    {
      name: 'Recomended',
    },
    {
      name: 'Most Viewed',
    },
    {
      name: 'Most Visited',
    },
  ];

  cat = [
    {
      img: 'assets/img/image 21.png',
      name: 'Mountain',
    },
    {
      img: 'assets/img/image 22.png',
      name: 'Beach',
    },
    {
      img: 'assets/img/image 23.png',
      name: 'Park',
    },
    {
      img: 'assets/img/image 24.png',
      name: 'Park',
    },
    {
      img: 'assets/img/image 21.png',
      name: 'Park',
    },
  ];

  citys = [
    {
      img: 'assets/img/image 2.png',
      name: 'Collesuem',
      country: 'Rome',
    },
    {
      img: 'assets/img/image 5.png',
      name: 'Mount Bromo',
      country: 'Indonesia',
    },
    {
      img: 'assets/img/image 2.png',
      name: 'Collesuem',
      country: 'Rome',
    },
  ];

  constructor() {}
}
